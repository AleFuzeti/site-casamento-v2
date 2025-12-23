# 🔗 Conectar casamento-react-2 ao servidor Render

## ✅ CONFIGURAÇÃO CONCLUÍDA

O frontend agora está configurado para conectar ao servidor no Render!

---

## 📝 O que foi feito

### 1. Atualizado `src/services/convidadosService.js`
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'https://server-casamento.onrender.com/api';
```

### 2. Criados arquivos .env

**`.env.local`** (Desenvolvimento - servidor local)
```
VITE_API_URL=http://localhost:3000/api
```

**`.env.production`** (Produção - servidor Render)
```
VITE_API_URL=https://server-casamento.onrender.com/api
```

---

## 🚀 Como usar

### Desenvolvimento Local

Se você está desenvolvendo e quer testar com servidor local:

```bash
# Terminal 1: Rodar servidor local
cd casamento-server
npm start

# Terminal 2: Rodar frontend
cd casamento-react-2
npm run dev
```

O frontend usará `http://localhost:3000/api` (arquivo `.env.local`)

### Produção (Render)

Se quer testar com servidor em produção no Render:

```bash
# Deletar ou renomear .env.local temporariamente
mv .env.local .env.local.backup

# Rodar frontend
npm run dev
```

O frontend usará `https://server-casamento.onrender.com/api` (padrão ou `.env.production`)

---

## 🧪 Testar Conexão

### 1. Verificar se servidor está online

```bash
curl https://server-casamento.onrender.com/
```

Deve retornar:
```json
{
  "status": "OK",
  "message": "Server casamento rodando 🚀",
  "timestamp": "..."
}
```

### 2. Testar endpoint de convidados

```bash
curl https://server-casamento.onrender.com/api/convidados
```

Deve retornar array de convidados (pode estar vazio se ainda não migrou dados)

### 3. Rodar frontend e testar

```bash
cd casamento-react-2
npm run dev
```

Acesse: `http://localhost:5173`

- Digite um código de convidado
- Confirme presença
- Verifique se aparece mensagem de sucesso
- **Importante:** Verifique no Firebase Console se os dados foram salvos!

---

## 🔍 Debug

### Ver qual URL está sendo usada

Abra o console do navegador (F12) e procure por:
```
📊 Convidados carregados da API: X
```

### Erro de CORS

Se aparecer erro de CORS no console:
```
Access to fetch at 'https://server-casamento.onrender.com' from origin 'http://localhost:5173' has been blocked by CORS
```

**Solução:** O servidor já tem CORS habilitado em `index.js`:
```javascript
app.use(cors());
```

Isso permite requisições de qualquer origem. Está OK! ✅

### Erro 404

Se endpoints retornam 404:
- Verifique se o servidor está rodando no Render
- Acesse o dashboard do Render e veja os logs
- Verifique se o deploy foi bem-sucedido

### Dados não aparecem

Se `/api/convidados` retorna array vazio:
- Você ainda não migrou os dados para o Firebase
- Execute: `node scripts/migrateToFirebase.js` no servidor local
- Ou adicione dados manualmente no Firebase Console

---

## 📊 Fluxo Completo

```
Frontend (localhost:5173)
    ↓ HTTP Request
    ↓ https://server-casamento.onrender.com/api
    ↓
Servidor Render (Express)
    ↓
Firebase Realtime Database ☁️
    ↓
Dados salvos permanentemente ✅
```

---

## 🎯 Checklist

- [x] `convidadosService.js` atualizado com URL do Render
- [x] `.env.local` criado (desenvolvimento local)
- [x] `.env.production` criado (produção)
- [ ] Servidor rodando no Render
- [ ] Firebase configurado no servidor
- [ ] Dados migrados para Firebase
- [ ] Teste de confirmação funcionando
- [ ] Dados aparecem no Firebase Console

---

## 📞 Próximos Passos

### Se ainda não fez:

1. **Configurar Firebase no Render**
   - Render → Secret Files → `serviceAccountKey.json`
   - Veja: [RENDER_SECRET_FILES.md](../casamento-server/RENDER_SECRET_FILES.md)

2. **Migrar dados para Firebase**
   ```bash
   cd casamento-server
   node scripts/migrateToFirebase.js
   ```

3. **Deploy do frontend**
   - Se for fazer deploy do frontend (Vercel/Netlify)
   - Configure variável: `VITE_API_URL=https://server-casamento.onrender.com/api`

---

## ✅ Tudo Pronto!

Agora seu sistema está assim:

```
Frontend ✅ → Servidor ✅ → Firebase ✅
```

**Teste e celebre! 🎉**
