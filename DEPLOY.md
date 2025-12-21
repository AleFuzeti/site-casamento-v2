# 🚀 Guia Completo de Deploy - GitHub Pages

## ✅ SEU REPOSITÓRIO JÁ ESTÁ PRONTO!

- ✅ Repositório: `https://github.com/AleFuzeti/site-casamento-v2`
- ✅ Código já na branch `main`
- ✅ Configuração completa feita

---

## 🎯 Escolha Seu Caminho

### ⚡ Quero Publicar Rapidamente? 
👇 Vá direto para **[GitHub Pages - Passo a Passo Rápido](#github-pages---passo-a-passo-rápido)**

### 🔧 Preciso de Outra Opção?
👇 Veja **[Outras Alternativas de Deploy](#outras-alternativas-de-deploy)**

---

## GitHub Pages - Passo a Passo Rápido

### ✅ Pré-Requisitos (Já Completos!)
- ✅ Repositório GitHub criado
- ✅ Código enviado para `main`
- ✅ `vite.config.js` configurado
- ✅ `package.json` com scripts de deploy
- ✅ `src/App.jsx` com basename
- ✅ `public/404.html` criado
- ✅ `gh-pages` instalado

### 1️⃣ Sincronizar Alterações (Se Houver)

Se fez mudanças locais:

```bash
# Commit das mudanças
git add .
git commit -m "Atualizar documentação"

# Push para o GitHub
git push origin main
```

### 2️⃣ Fazer Deploy (Um Comando!)

```bash
npm run deploy
```

Isso automaticamente:
1. Faz build do projeto (`npm run build`)
2. Cria/atualiza o branch `gh-pages`
3. Faz upload para o GitHub

### 3️⃣ Configurar GitHub Pages

1. Acesse: `https://github.com/AleFuzeti/site-casamento-v2`
2. Vá em **Settings** → **Pages**
3. Em **Source**, selecione:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
4. Clique em **Save**

### 4️⃣ Acessar o Site

Aguarde 1-2 minutos e acesse:
```
https://alefuzeti.github.io/site-casamento-v2/
```

---

## Outras Alternativas de Deploy

### Opção 1: Vercel (Recomendado para Backend)

1. Acesse: https://vercel.com/
2. Clique em "Add New Project"
3. Importe o repositório do GitHub
4. Clique em "Deploy"

**Vantagem:** Funciona com backend Express!

### Opção 2: Netlify

1. Acesse: https://www.netlify.com/
2. Clique em "Add new site" > "Import an existing project"
3. Selecione o repositório
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clique em "Deploy"

### Opção 3: Domínio Customizado (ex: www.meucasamento.com)

#### 3.1 Comprar um domínio

Em: Registro.br, GoDaddy, Namecheap, etc.

#### 3.2 Configurar DNS

Adicione no painel do seu provedor:

```
Tipo: CNAME
Nome: www
Valor: SEU_USUARIO.github.io
```

#### 3.3 Criar arquivo CNAME

Crie `public/CNAME`:
```
www.meucasamento.com
```

#### 3.4 Atualizar Config (Se não usar subpasta)

**vite.config.js:**
```javascript
base: '/', // ao invés de '/casamento-react-2/'
```

**src/main.jsx:**
```javascript
// Sem basename se usar domínio próprio
<BrowserRouter basename="/">
```

#### 3.5 Deploy

```bash
npm run deploy
```

---

## ⚠️ Importante: Backend/API

- **GitHub Pages:** Apenas arquivos estáticos → **NÃO funciona**
- **Vercel/Netlify:** Suportam backend → **FUNCIONA**
- **Solução:** Use Firebase ou LocalStorage

---

## 🔄 Atualizar o Site

Sempre que fizer mudanças:

```bash
# 1. Commit e push
git add .
git commit -m "Descrição da mudança"
git push origin main

# 2. Deploy
npm run deploy
```

---

## 🐛 Troubleshooting

### Página em Branco?

**Solução:**
```bash
# Verifiquerem o nome do repositório
# Atualize vite.config.js:
base: '/NOME-DO-SEU-REPO/',

# Rebuild e redeploy
npm run build
npm run deploy
```

### Imagens não carregam?

**Solução:**
- Coloque imagens em `public/`
- Use caminho: `./images/foto.png`

### Deploy falha?

**Solução:**
```bash
# Limpar e tentar novamente
rm -rf dist node_modules/.vite
npm run deploy
```

---

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
