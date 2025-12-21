const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, '../public')));

const convidadosPath = path.join(__dirname, '../src/data/convidados.json');

// POST: Confirmar presença
app.post('/api/confirmar', (req, res) => {
  const { codigo, nomesConfirmados } = req.body;

  console.log('🔔 Requisição recebida em /api/confirmar');
  console.log('📦 Dados recebidos:', { codigo, nomesConfirmados });

  if (!codigo || !Array.isArray(nomesConfirmados)) {
    console.log('❌ Dados inválidos recebidos.');
    return res.status(400).json({ success: false, message: 'Dados inválidos' });
  }

  let convidadosRaw;
  try {
    convidadosRaw = fs.readFileSync(convidadosPath, 'utf8');
    console.log('📄 Leitura do arquivo convidados.json realizada com sucesso');
  } catch (err) {
    console.error('❌ Erro ao ler o arquivo convidados.json:', err);
    return res.status(500).json({ success: false, message: 'Erro ao ler dados' });
  }

  let convidados;
  try {
    convidados = JSON.parse(convidadosRaw);
    console.log('📚 JSON parse concluído. Total de convidados:', convidados.length);
  } catch (err) {
    console.error('❌ Erro ao fazer parse do JSON:', err);
    return res.status(500).json({ success: false, message: 'Erro no parse do JSON' });
  }

  let encontrado = false;

  // Atualiza o convidado removendo ou adicionando nomes conforme enviado (inclusive vazio)
  const novosConvidados = convidados.map(convidado => {
    // Compara códigos em maiúsculo para aceitar QWE12 e qwe12
    if ((convidado.codigo || '').toUpperCase() === (codigo || '').toUpperCase()) {
      encontrado = true;
      console.log('✅ Código encontrado:', codigo);
      console.log('👥 Convidado antes da atualização:', convidado);

      const atualizado = {
        ...convidado,
        confirmados: [...nomesConfirmados],
        confirmado: nomesConfirmados.length > 0,
        dataConfirmacao: new Date().toISOString()
      };

      console.log('📝 Convidado atualizado:', atualizado);
      return atualizado;
    }
    return convidado;
  });

  if (!encontrado) {
    console.log('❌ Código de convite não encontrado:', codigo);
    return res.status(404).json({ success: false, message: 'Código não encontrado' });
  }

  try {
    fs.writeFileSync(convidadosPath, JSON.stringify(novosConvidados, null, 2));
    console.log('💾 convidados.json atualizado com sucesso!');
    res.json({ success: true, message: 'Presença confirmada!' });
  } catch (err) {
    console.error('❌ Erro ao escrever no arquivo convidados.json:', err);
    res.status(500).json({ success: false, message: 'Erro ao salvar dados' });
  }
});

// GET: Buscar todos os convidados
app.get('/api/convidados', (req, res) => {
  try {
    const convidados = JSON.parse(fs.readFileSync(convidadosPath, 'utf8'));
    console.log('📋 GET /api/convidados - Total:', convidados.length);
    res.json(convidados);
  } catch (err) {
    console.error('❌ Erro ao ler convidados:', err);
    res.status(500).json({ error: 'Erro ao carregar convidados' });
  }
});

// GET: Buscar convidado por código
app.get('/api/convidados/:codigo', (req, res) => {
  try {
    const { codigo } = req.params;
    const convidados = JSON.parse(fs.readFileSync(convidadosPath, 'utf8'));
    const convidado = convidados.find(c => c.codigo?.toUpperCase() === codigo.toUpperCase());
    
    if (convidado) {
      console.log('✅ GET /api/convidados/:codigo - Encontrado:', codigo);
      res.json(convidado);
    } else {
      console.log('❌ GET /api/convidados/:codigo - Não encontrado:', codigo);
      res.status(404).json({ error: 'Código não encontrado' });
    }
  } catch (err) {
    console.error('❌ Erro ao buscar convidado:', err);
    res.status(500).json({ error: 'Erro ao buscar convidado' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor backend rodando na porta ${PORT}`);
  console.log(`📡 API disponível em: http://localhost:${PORT}/api`);
  console.log(`\n📋 Endpoints disponíveis:`);
  console.log(`   GET  /api/convidados - Lista todos os convidados`);
  console.log(`   GET  /api/convidados/:codigo - Busca por código`);
  console.log(`   POST /api/confirmar - Confirma presença\n`);
});
