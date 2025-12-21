# Site de Casamento 💍

Site moderno e elegante desenvolvido em React para celebrar nosso casamento!

## 🚀 QUER PUBLICAR AGORA?

**👉 Leia: `COMECE-AQUI.md`** ⬅️

Ou execute direto:
```bash
npm run deploy
```

Guias úteis:
- **`3-PASSOS.md`** - Deploy em 3 passos
- **`DEPLOY.md`** - Guia completo com todas as opções
- **`DEPLOY-CHECKLIST.md`** - Checklist pré-deploy

---

## 📚 Documentação Principal

- **`COMECE-AQUI.md`** - Navegação visual (COMECE POR AQUI!)
- **`RESUMO-PROJETO.md`** - Visão geral do projeto
- **`DEPLOY.md`** - Guia completo de deployment
- **`DEPLOY-CHECKLIST.md`** - Checklist antes de publicar

---

## 📚 Documentação Técnica

- **`PRESENTES-README.md`** - Sistema de presentes e PIX
- **`CONFIRMACAO-README.md`** - Sistema de confirmação
- **`API-README.md`** - Backend Express (opcional)
- **`FIREBASE-README.md`** - Firebase (opcional)
- **`PERSONALIZACAO.md`** - Guia de personalização

---

## 📋 Páginas do Site

1. **Início** - Página principal com contagem regressiva
2. **O Casal** - Nossa história e timeline do relacionamento
3. **A Cerimônia** - Informações sobre data, local e programação
4. **Confirmação de Presença** - Formulário para confirmar presença
5. **Lista de Presentes** - Sugestões de presentes e opções de PIX

---

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Navegação entre páginas
- **React Icons** - Ícones modernos

## 📁 Estrutura do Projeto

```
casamento-react-2/
├── public/              # Arquivos públicos
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/          # Páginas do site
│   │   ├── Home.jsx
│   │   ├── OCasal.jsx
│   │   ├── ACerimonia.jsx
│   │   ├── Confirmacao.jsx
│   │   └── ListaPresentes.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## 🌐 Deploy

### 🚀 Deploy no GitHub Pages (Recomendado)

**✅ CONFIGURAÇÃO COMPLETA! Pronto para deploy!**

Execute apenas um comando:

```bash
npm run deploy
```

Depois configure no GitHub (Settings → Pages → Branch: `gh-pages`) e acesse:
```
https://alefuzeti.github.io/site-casamento-v2/
```

**Guias completos:**
- **`3-PASSOS.md`** - Deploy em 3 passos
- **`DEPLOY.md`** - Guia detalhado passo a passo
- **`DEPLOY-CHECKLIST.md`** - Checklist antes de publicar

### Outras Plataformas

- **Vercel** - [vercel.com](https://vercel.com) - Suporta backend Express
- **Netlify** - [netlify.com](https://netlify.com) - Deploy automático
- **GitHub Pages** - ✅ Configurado!

Nota: GitHub Pages hospeda apenas frontend. Para usar o backend Express, veja `DEPLOY.md`.

## 📸 Adicionando Fotos

1. Adicione suas fotos na pasta `public/images/`
2. Referencie-as nos componentes usando `/images/nome-da-foto.jpg`

## ✨ Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Contagem regressiva para o casamento
- ✅ Navegação suave entre páginas
- ✅ Formulário de confirmação de presença
- ✅ Lista de presentes com opção PIX
- ✅ Timeline do relacionamento
- ✅ Informações da cerimônia e recepção

---

Feito com ❤️ para nosso dia especial!
