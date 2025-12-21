# 🎯 COMEÇAR AQUI! - Guia Visual Rápido

## 🚨 ATENÇÃO: LEIA ISSO PRIMEIRO!

Seu projeto está **100% configurado e pronto para publicar!**

---

## 📍 ONDE ESTOU?

```
Você está aqui: ✅ PRONTO PARA DEPLOY
                    ↓
              [ npm run deploy ]
                    ↓
         🌐 SITE NO AR! 🎉
```

---

## 🎯 ESCOLHA SEU CAMINHO

### 🚀 Quero publicar AGORA! (5 minutos)
👉 Abra: **`3-PASSOS.md`**

Execute apenas:
```bash
npm run deploy
```

---

### 📖 Quero entender o que foi feito
👉 Abra: **`RESUMO-PROJETO.md`** ou **`SETUP-COMPLETO.md`**

---

### 🔧 Estou com erro/problema
👉 Abra: **`DEPLOY.md`** (seção Troubleshooting)

---

### 🌐 Quero usar meu próprio domínio
👉 Abra: **`DEPLOY.md`** (Opção 3: Domínio Customizado)

Exemplo: `www.meucasamento.com` em vez de `usuario.github.io/repo`

---

### 🔌 Quero usar o backend Express
👉 Abra: **`DEPLOY.md`** (Opção 2: Vercel)

⚠️ GitHub Pages não suporta backend!

---

### 🎨 Quero personalizar antes de publicar
👉 Veja seção abaixo: **"Como Personalizar"**

---

## 🎨 COMO PERSONALIZAR (ANTES DO DEPLOY)

### 1. Trocar Fotos do Casal
📁 Local: `public/images/`
- Substitua `noivo.png` e `noiva.png`
- Substitua `noivo_secret.jpeg` e `noiva_secret.jpeg` (easter egg)

### 2. Ajustar Informações
📄 Arquivos a editar:
- **Data do casamento:** `src/pages/Home.jsx` (linha ~8)
- **História do casal:** `src/pages/OCasal.jsx`
- **Local da cerimônia:** `src/pages/ACerimonia.jsx`
- **Sua chave PIX:** `src/pages/ListaPresentes.jsx`

### 3. Personalizar Lista de Presentes
📄 Arquivo: `public/assets/static/presentes.json`

Formato:
```json
{
  "id": 1,
  "nome": "Nome do Presente",
  "preco": 100.00,
  "descricao": "Descrição",
  "imagem": "nome-imagem.png",
  "prioridade": 1
}
```

📁 Imagens dos presentes: `public/assets/presentes/`

### 4. Mudar Cores do Site
📄 Arquivo: `tailwind.config.js`

Cores atuais:
- Verde Oliva: `#767745`
- Rosa Acinzentado: `#c0afad`

---

## ⚠️ NOME DO REPOSITÓRIO DIFERENTE?

Se seu repositório não se chama `casamento-react-2`:

### Arquivos a atualizar:

1. **`vite.config.js`** (linha ~6)
```javascript
base: '/SEU-REPO/',
```

2. **`src/App.jsx`** (linha ~10)
```javascript
<Router basename="/SEU-REPO">
```

3. **`public/404.html`** (linha ~9)
```html
<meta http-equiv="refresh" content="0;URL='/SEU-REPO/'">
```

Depois execute:
```bash
npm run build
npm run deploy
```

---

## 📚 TODOS OS GUIAS DISPONÍVEIS

| Emoji | Arquivo | Quando usar |
|-------|---------|-------------|
| ⚡ | `3-PASSOS.md` | Publicar AGORA |
| ✅ | `SETUP-COMPLETO.md` | Ver status |
| 🔧 | `DEPLOY-RAPIDO.md` | Guia rápido + erros |
| 📖 | `DEPLOY.md` | Guia detalhado |
| 🌐 | `DEPLOY-ALTERNATIVAS.md` | Domínio próprio |
| 📊 | `RESUMO-PROJETO.md` | Visão geral completa |
| 🔌 | `API-README.md` | Backend Express |
| 💾 | `PERSISTENCIA-README.md` | LocalStorage/Firebase |
| 🎁 | `PRESENTES-README.md` | Sistema de presentes |
| 🐰 | `EASTER-EGG.md` | Easter eggs |
| ✅ | `CONFIRMACAO-README.md` | Confirmação de presença |

---

## 🎯 COMANDO MÁGICO

```bash
npm run deploy
```

É só isso! 🪄✨

---

## 📞 AJUDA RÁPIDA

### ❓ Página em branco após deploy?
→ Veja `DEPLOY-RAPIDO.md` (Problema 1)

### ❓ Imagens não aparecem?
→ Veja `DEPLOY-RAPIDO.md` (Problema 2)

### ❓ Erro ao executar `npm run deploy`?
→ Execute: `npm install` e tente novamente

### ❓ Backend não funciona?
→ GitHub Pages não suporta backend. Use Vercel (`DEPLOY-ALTERNATIVAS.md`)

### ❓ Quero testar antes de publicar?
→ Execute:
```bash
npm run build
npm run preview
```
Acesse: `http://localhost:4173/casamento-react-2/`

---

## ✅ CHECKLIST PRÉ-DEPLOY

- [ ] Troquei as fotos do casal
- [ ] Atualizei a data do casamento
- [ ] Ajustei informações da cerimônia
- [ ] Configurei minha chave PIX
- [ ] Personalizei a lista de presentes
- [ ] Testei localmente (`npm run preview`)
- [ ] Tudo funcionando

**Pronto?** Execute: `npm run deploy` 🚀

---

## 🎊 DEPOIS DO DEPLOY

1. Configure no GitHub: Settings → Pages → Branch: `gh-pages`
2. Aguarde 2-5 minutos
3. Acesse: `https://SEU_USUARIO.github.io/casamento-react-2/`
4. Compartilhe com os convidados! 📱💒

---

## 💡 DICA FINAL

**Salve este link nos favoritos:**

```
https://SEU_USUARIO.github.io/casamento-react-2/
```

E compartilhe com seus convidados via:
- 📱 WhatsApp
- 📧 Email
- 📝 Convite impresso (QR Code)
- 💌 Redes sociais

---

## 🎉 PRONTO!

Você tem tudo que precisa para colocar seu site no ar!

**Boa sorte com o casamento!** 💍✨

---

**Começe pelo arquivo: `3-PASSOS.md`** ⬅️
