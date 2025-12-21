# 🚀 Configuração API + Backend

## ✅ O QUE FOI FEITO

Agora o sistema funciona com **backend (servidor) + API** ao invés de LocalStorage!

### Arquivos Criados/Modificados:

1. **`server/server.js`** - Servidor Express com API
2. **`src/services/convidadosService.js`** - Cliente da API
3. **`src/pages/Confirmacao.jsx`** - Atualizado para usar API
4. **`src/pages/Confirmacao-LocalStorage-Backup.jsx`** - Backup da versão anterior
5. **`package.json`** - Novos scripts adicionados

## 🎯 COMO USAR

### Opção 1: Rodar Manualmente (2 terminais)

**Terminal 1 - Backend:**
```bash
npm run server
```
Resultado: `🚀 Servidor backend rodando na porta 4000`

**Terminal 2 - Frontend:**
```bash
npm run dev
```
Resultado: Frontend rodando em `http://localhost:5173`

### Opção 2: Rodar Tudo Junto (Precisa instalar concurrently)

```bash
# Instalar concurrently
npm install --save-dev concurrently

# Rodar tudo junto
npm run dev:full
```

## 📡 ENDPOINTS DA API

### GET /api/convidados
Lista todos os convidados
```bash
curl http://localhost:4000/api/convidados
```

### GET /api/convidados/:codigo
Busca convidado por código
```bash
curl http://localhost:4000/api/convidados/QWE12
```

### POST /api/confirmar
Confirma presença
```bash
curl -X POST http://localhost:4000/api/confirmar \
  -H "Content-Type: application/json" \
  -d '{"codigo":"QWE12","nomesConfirmados":["Cássia Fredegotto"]}'
```

## 🧪 COMO TESTAR

### 1. Iniciar o servidor:
```bash
# Terminal 1
npm run server

# Deve aparecer:
# 🚀 Servidor backend rodando na porta 4000
# 📡 API disponível em: http://localhost:4000/api
```

### 2. Iniciar o frontend:
```bash
# Terminal 2
npm run dev

# Deve aparecer:
# VITE v... ready in ...ms
# ➜  Local:   http://localhost:5173/
```

### 3. Testar no navegador:
1. Acesse: `http://localhost:5173/confirmacao`
2. Digite: `QWE12`
3. Marque algumas pessoas
4. Clique em "Confirmar Presença"
5. ✅ Veja a mensagem de sucesso
6. **F5 (recarregar)** - Dados permanecem!
7. Digite `M0M0` para ver o relatório

### 4. Verificar no terminal do servidor:
Você verá os logs:
```
🔔 Requisição recebida em /api/confirmar
📦 Dados recebidos: { codigo: 'QWE12', nomesConfirmados: [...] }
✅ Código encontrado: QWE12
💾 convidados.json atualizado com sucesso!
```

## ✨ DIFERENÇAS vs LocalStorage

| LocalStorage | API + Backend |
|--------------|---------------|
| Dados no navegador | Dados no servidor |
| Cada navegador separado | Todos veem os mesmos dados |
| Perde ao limpar cache | Dados permanentes |
| Não sincroniza | Sincronização automática |
| Offline funciona | Precisa de internet |

## 🎯 COMO FUNCIONA

```
Frontend (React)
     ↓
convidadosService.js
     ↓
HTTP Request (fetch)
     ↓
API (Express)
     ↓
convidados.json (servidor)
```

## 📊 FLUXO DE CONFIRMAÇÃO

1. **Usuário digita código** → Frontend busca na API
2. **Seleciona pessoas** → Frontend envia POST /api/confirmar
3. **Backend salva** → Atualiza `src/data/convidados.json`
4. **Frontend recarrega** → Busca dados atualizados
5. **Mostra confirmação** → "✅ Presença confirmada!"

## ⚠️ IMPORTANTE

### O servidor DEVE estar rodando!
- Sem o servidor: ❌ "Erro ao carregar dados"
- Com o servidor: ✅ Tudo funciona

### Porta 4000
- Backend roda na porta **4000**
- Frontend roda na porta **5173** (Vite)
- Verifique se a porta 4000 está livre

### CORS
- Já configurado para aceitar requisições do frontend
- `app.use(cors())` no server.js

## 🐛 TROUBLESHOOTING

### Erro: "Erro ao carregar dados"
```bash
# Verifique se o servidor está rodando
npm run server

# Deve aparecer: 🚀 Servidor backend rodando na porta 4000
```

### Erro: "EADDRINUSE: address already in use :::4000"
```bash
# A porta 4000 já está em uso
# Opção 1: Fechar o processo na porta 4000
# Opção 2: Mudar a porta no server.js
```

### Dados não salvam
```bash
# Verifique no terminal do servidor se aparece:
# 💾 convidados.json atualizado com sucesso!

# Se não aparecer, verifique permissões de escrita
```

## 📝 LOGS DO SERVIDOR

O servidor mostra logs detalhados:
- 🔔 Quando recebe requisição
- 📦 Dados recebidos
- ✅ Código encontrado
- 💾 Arquivo atualizado
- ❌ Erros (se houver)

## 🔐 SEGURANÇA (Futura)

Para produção, adicione:
- [ ] Autenticação (JWT, OAuth)
- [ ] Validação de dados
- [ ] Rate limiting
- [ ] HTTPS
- [ ] Variáveis de ambiente
- [ ] Database (PostgreSQL, MongoDB, etc)

## 🚀 DEPLOY (Futuro)

### Backend:
- Heroku
- Railway
- Render
- DigitalOcean

### Frontend:
- Vercel
- Netlify
- Cloudflare Pages

### Fullstack:
- Railway (melhor opção)
- Render

## ✅ STATUS ATUAL

- ✅ Backend configurado e funcionando
- ✅ API criada com 3 endpoints
- ✅ Frontend conectado à API
- ✅ Confirmações salvam no servidor
- ✅ Dados persistem após F5
- ✅ Relatório (M0M0) funcionando
- ✅ Logs detalhados
- ✅ CORS configurado

---

**Última atualização:** Dezembro 2025
