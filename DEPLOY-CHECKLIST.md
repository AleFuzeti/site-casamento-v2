# ✅ CHECKLIST PRÉ-DEPLOY

Antes de publicar, verifique:

## 🎨 Conteúdo

- [ ] Fotos do casal (noivo.png, noiva.png) estão em `public/images/`
- [ ] Data do casamento está correta em `src/pages/Home.jsx`
- [ ] Histórias do casal estão corretas em `src/pages/OCasal.jsx`
- [ ] Local da cerimônia está correto em `src/pages/ACerimonia.jsx`
- [ ] Sua chave PIX está em `src/pages/ListaPresentes.jsx`
- [ ] Lista de presentes está atualizada em `public/assets/static/presentes.json`

## 🔧 Configuração Técnica

- [ ] `vite.config.js` → `base: '/site-casamento-v2/'`
- [ ] `src/main.jsx` → `basename="/site-casamento-v2"`
- [ ] `package.json` → scripts `deploy` e `predeploy` existem
- [ ] `public/404.html` → criado para suporte a rotas

## 🧪 Testes Locais

- [ ] `npm run build` executa sem erros
- [ ] `npm run preview` funciona e acessa `http://localhost:4173/site-casamento-v2/`
- [ ] Todas as páginas carregam corretamente
- [ ] Imagens aparecem normalmente
- [ ] Links funcionam
- [ ] PIX/QR Code funcionam

## 📤 Deploy

- [ ] Mudanças locais foram commitadas: `git add .` + `git commit -m "..."`
- [ ] Código foi enviado para GitHub: `git push origin main`
- [ ] Executou `npm run deploy`
- [ ] Aguardou mensagem de sucesso

## 🌐 GitHub Pages

- [ ] Acessou Settings → Pages
- [ ] Branch: `gh-pages` selecionado
- [ ] Folder: `/ (root)` selecionado
- [ ] Salvou as configurações
- [ ] Aguardou 1-2 minutos

## 🎉 Validação Final

- [ ] Acessou `https://alefuzeti.github.io/site-casamento-v2/`
- [ ] Home page carrega corretamente
- [ ] Todas as páginas funcionam (O Casal, Cerimônia, Confirmação, Presentes)
- [ ] Links funcionam
- [ ] Responsivo em celular

---

## 🚨 Se Algo Falhar

1. Veja seção **Troubleshooting** em `DEPLOY.md`
2. Execute `npm install` para garantir dependências
3. Limpe cache: `rm -rf dist`
4. Tente novamente: `npm run deploy`

---

Após aprovado, você está pronto para convidar seus amigos! 🎉
