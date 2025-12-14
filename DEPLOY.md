# 🚀 Guia de Publicação no GitHub

## ✅ Passo 1: Criar Repositório no GitHub (CONCLUÍDO)
- Repositório Git inicializado ✅
- Primeiro commit feito ✅

## 📤 Passo 2: Conectar ao GitHub

### Opção A: Criar um novo repositório no GitHub.com

1. Acesse: https://github.com/new
2. Nome do repositório: `casamento-react-2` (ou outro nome de sua preferência)
3. Deixe como **público** ou **privado**
4. **NÃO** marque "Initialize this repository with a README" (já temos um)
5. Clique em "Create repository"

### Opção B: Usar um repositório existente

Se já tiver um repositório criado, apenas anote a URL.

## 🔗 Passo 3: Conectar e Fazer Push

Depois de criar o repositório no GitHub, execute os comandos:

```bash
# Substitua SEU_USUARIO pelo seu usuário do GitHub
git remote add origin https://github.com/SEU_USUARIO/casamento-react-2.git

# Verificar se o remote foi adicionado
git remote -v

# Fazer o push do código
git push -u origin main
```

## 🌐 Passo 4: Deploy (Opcional)

### Opção 1: Vercel (Recomendado)

1. Acesse: https://vercel.com/
2. Clique em "Add New Project"
3. Importe o repositório do GitHub
4. A Vercel detectará automaticamente que é um projeto Vite
5. Clique em "Deploy"

### Opção 2: Netlify

1. Acesse: https://www.netlify.com/
2. Clique em "Add new site" > "Import an existing project"
3. Conecte ao GitHub e selecione o repositório
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clique em "Deploy"

### Opção 3: GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar no package.json (scripts):
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 📝 Comandos Úteis

```bash
# Ver status do repositório
git status

# Ver histórico de commits
git log --oneline

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição da mudança"

# Enviar para GitHub
git push

# Puxar mudanças
git pull
```

## 🔐 Autenticação no GitHub

Se for a primeira vez usando Git/GitHub neste computador:

```bash
# Configurar nome e email
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"

# Para autenticação, você precisará de:
# - Personal Access Token (recomendado)
# - SSH Key
# - GitHub CLI (gh)
```

### Criar Personal Access Token:
1. GitHub.com > Settings > Developer settings > Personal access tokens > Tokens (classic)
2. "Generate new token (classic)"
3. Selecione "repo" (acesso completo aos repositórios)
4. Copie o token e use como senha no git push

## 🎉 Pronto!

Após o push, seu código estará no GitHub e você poderá:
- Compartilhar o link do repositório
- Fazer deploy em plataformas como Vercel/Netlify
- Colaborar com outras pessoas
- Ter backup do código na nuvem
