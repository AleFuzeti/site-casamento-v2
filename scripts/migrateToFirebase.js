// scripts/migrateToFirebase.js
// Script para migrar os dados de convidados.json para o Firebase Realtime Database

import { convidadosService } from '../src/services/convidadosService.js';
import convidadosData from '../src/data/convidados.json' assert { type: 'json' };

async function migrarParaFirebase() {
  console.log('🔥 Iniciando migração para Firebase...\n');
  
  console.log(`📊 Total de convidados para migrar: ${convidadosData.length}`);
  
  const confirmados = convidadosData.filter(c => c.confirmado);
  console.log(`✅ Já confirmaram: ${confirmados.length}\n`);
  
  try {
    console.log('⏳ Migrando dados...');
    const resultado = await convidadosService.migrarConvidados(convidadosData);
    
    if (resultado.success) {
      console.log(`\n✅ Migração concluída com sucesso!`);
      console.log(`📦 ${resultado.total} convidados migrados para o Firebase\n`);
      
      console.log('🎉 Próximos passos:');
      console.log('1. Acesse: https://console.firebase.google.com/');
      console.log('2. Selecione seu projeto: casamento-react');
      console.log('3. Vá em "Realtime Database" para ver os dados\n');
      
      console.log('🔐 Códigos especiais:');
      console.log('- M0M0: Ver relatório de todos os convidados');
      console.log('- ADMIN: Painel de administração (se implementado)\n');
      
      console.log('📝 Códigos de convite disponíveis:');
      convidadosData.forEach(c => {
        if (c.codigo) {
          const status = c.confirmado ? '✅' : '❌';
          console.log(`${status} ${c.codigo} - ${c.nomes?.join(', ') || 'Sem nomes'}`);
        }
      });
    } else {
      console.error('❌ Erro na migração:', resultado.error);
    }
  } catch (error) {
    console.error('❌ Erro ao migrar:', error);
  }
}

// Executar migração
migrarParaFirebase();
