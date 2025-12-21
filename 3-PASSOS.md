# 🎯 3 PASSOS PARA PUBLICAR SEU SITE

## Passo 1️⃣: Deploy

Abra o terminal na pasta do projeto e execute:

```bash
npm run deploy
```

Aguarde a mensagem: `Published` ✅

---

## Passo 2️⃣: Configurar GitHub Pages

1. Acesse seu repositório no GitHub:
   ```
   https://github.com/AleFuzeti/site-casamento-v2
   ```

2. Clique em **Settings** (Configurações)

3. No menu lateral, clique em **Pages**

4. Em **Source**, selecione:
   - **Branch:** `gh-pages` ⬇️
   - **Folder:** `/ (root)` ⬇️

5. Clique em **Save** (Salvar)

---

## Passo 3️⃣: Acessar o Site

Aguarde 1-2 minutos e acesse:

```
https://alefuzeti.github.io/site-casamento-v2/
```

---

## 🎉 PRONTO!

Seu site está no ar! Compartilhe o link com seus convidados! 💒✨

---

## 🔄 Para Atualizar (Futuras Alterações)

Sempre que fizer mudanças no código:

```bash
# 1. Salvar as alterações
git add .
git commit -m "Descrição da alteração"
git push

# 2. Publicar novamente
npm run deploy
```

---

## ⚠️ Problemas?

### Página em branco?
- Verifique o guia completo em `DEPLOY.md` (seção Troubleshooting)

### Imagens não aparecem?
- Certifique-se de que as imagens estão na pasta `public/`
- Execute `npm run deploy` novamente

### Erro no deploy?
- Execute: `npm install` e depois `npm run deploy`

---

## 📚 Guias Úteis

- **`COMECE-AQUI.md`** - 🚨 Navegação visual
- **`DEPLOY.md`** - 📖 Guia completo
- **`RESUMO-PROJETO.md`** - 📊 Visão geral do projeto

---

Boa sorte com o casamento! 💍✨
