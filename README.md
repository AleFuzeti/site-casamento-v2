# Site de Casamento 💍

Site moderno e elegante desenvolvido em React para celebrar nosso casamento!

## 🎨 Cores do Tema

- **Verde Oliva:** #767745
- **Rosa Acinzentado:** #c0afad

## 📋 Páginas

1. **Início** - Página principal com contagem regressiva
2. **O Casal** - Nossa história e timeline do relacionamento
3. **A Cerimônia** - Informações sobre data, local e programação
4. **Confirmação de Presença** - Formulário para confirmar presença
5. **Lista de Presentes** - Sugestões de presentes e opções de PIX

## 🚀 Como Executar

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

## 📝 Personalização

Para personalizar o site com suas informações:

1. **Data do Casamento:** Edite em `src/pages/Home.jsx` (linha 8)
2. **Nomes dos Noivos:** Substitua os placeholders `[Noivo]` e `[Noiva]`
3. **Informações da Cerimônia:** Edite `src/pages/ACerimonia.jsx`
4. **História do Casal:** Adicione em `src/pages/OCasal.jsx`
5. **Chave PIX:** Configure em `src/pages/ListaPresentes.jsx`

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

Sugestões de plataformas para deploy gratuito:

- **Vercel** - [vercel.com](https://vercel.com)
- **Netlify** - [netlify.com](https://netlify.com)
- **GitHub Pages** - [pages.github.com](https://pages.github.com)

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

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

Feito com ❤️ para nosso dia especial!
