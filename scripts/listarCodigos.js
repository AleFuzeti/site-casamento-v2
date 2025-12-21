// scripts/listarCodigos.js
// Script simples para listar todos os códigos de convite

const fs = require('fs');
const path = require('path');

const convidadosPath = path.join(__dirname, '../src/data/convidados.json');

try {
  const convidados = JSON.parse(fs.readFileSync(convidadosPath, 'utf8'));
  
  console.log('\n🎫 LISTA DE CÓDIGOS DE CONVITE\n');
  console.log('='.repeat(60));
  
  console.log(`\n📊 RESUMO:`);
  console.log(`   Total de convites: ${convidados.length}`);
  console.log(`   Confirmados: ${convidados.filter(c => c.confirmado).length}`);
  console.log(`   Não confirmados: ${convidados.filter(c => !c.confirmado).length}`);
  
  console.log(`\n🔑 CÓDIGOS ESPECIAIS:`);
  console.log(`   M0M0  - Ver relatório completo`);
  console.log(`   ADMIN - Painel de administração`);
  console.log(`   TESTE - Código de teste`);
  
  console.log(`\n📋 CÓDIGOS DE CONVITE:\n`);
  console.log('='.repeat(60));
  
  convidados.forEach((c, index) => {
    const status = c.confirmado ? '✅' : '❌';
    const codigo = c.codigo || '(sem código)';
    const nomes = c.nomes && c.nomes.length > 0 
      ? c.nomes.join(', ') 
      : '(sem nomes)';
    const confirmadosInfo = c.confirmados && c.confirmados.length > 0
      ? ` | Confirmados: ${c.confirmados.length}`
      : '';
    
    console.log(`${status} ${codigo.padEnd(8)} - ${nomes}${confirmadosInfo}`);
  });
  
  console.log('\n' + '='.repeat(60));
  
  // Estatísticas detalhadas
  const totalPessoas = convidados.reduce((total, c) => total + (c.nomes?.length || 0), 0);
  const totalConfirmados = convidados.reduce((total, c) => total + (c.confirmados?.length || 0), 0);
  
  console.log(`\n👥 ESTATÍSTICAS:`);
  console.log(`   Total de pessoas convidadas: ${totalPessoas}`);
  console.log(`   Total de pessoas confirmadas: ${totalConfirmados}`);
  console.log(`   Taxa de confirmação: ${((totalConfirmados / totalPessoas) * 100).toFixed(1)}%`);
  console.log('');
  
} catch (error) {
  console.error('❌ Erro ao ler arquivo de convidados:', error);
}
