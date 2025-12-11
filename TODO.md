# TODO - Site de Casamento

## Estrutura do Projeto

### ✅ Estrutura Base
- [x] Configuração inicial do React + Vite
- [x] Configuração do Tailwind CSS
- [x] Estrutura de pastas
- [x] Componentes base

### 📁 Estrutura de Arquivos

```
casamento-react-2/
├── public/
│   └── images/          # Imagens do casal, local, etc.
├── src/
│   ├── components/
│   │   ├── Header.jsx   # Cabeçalho com navegação
│   │   ├── Footer.jsx   # Rodapé
│   │   └── Layout.jsx   # Layout principal
│   ├── pages/
│   │   ├── Home.jsx             # Página inicial
│   │   ├── OCasal.jsx           # Página "O Casal"
│   │   ├── ACerimonia.jsx       # Página "A Cerimônia"
│   │   ├── Confirmacao.jsx      # Página "Confirmação de Presença"
│   │   └── ListaPresentes.jsx   # Página "Lista de Presentes"
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── tailwind.config.js
```

### 📄 Páginas

#### 🏠 Home (Página Inicial)
- [ ] Banner com foto do casal
- [ ] Contagem regressiva para o casamento
- [ ] Chamada para ação (botões de navegação)
- [ ] Animações suaves de entrada

#### 💑 O Casal
- [ ] História do casal
- [ ] Fotos do casal
- [ ] Timeline do relacionamento
- [ ] Informações individuais dos noivos

#### 💒 A Cerimônia
- [ ] Data e horário
- [ ] Local da cerimônia
- [ ] Mapa/localização
- [ ] Local da recepção
- [ ] Dress code
- [ ] Programação do dia

#### ✅ Confirmação de Presença
- [ ] Formulário de confirmação
- [ ] Nome do convidado
- [ ] Número de acompanhantes
- [ ] Restrições alimentares
- [ ] Mensagem para os noivos
- [ ] Integração com backend/formulário (Google Forms ou similar)

#### 🎁 Lista de Presentes
- [ ] Opções de presentes
- [ ] Links para lojas
- [ ] Opção de PIX/transferência
- [ ] QR Code para pagamento
- [ ] Mensagem de agradecimento

### 🎨 Design
- [x] Cores tema: #767745 (verde oliva) e #c0afad (rosa acinzentado)
- [ ] Tipografia elegante
- [ ] Layout responsivo (mobile-first)
- [ ] Animações suaves
- [ ] Ícones (React Icons)

### 🚀 Funcionalidades Futuras
- [ ] Galeria de fotos
- [ ] Playlist de músicas da festa
- [ ] FAQ (perguntas frequentes)
- [ ] Contador de convidados confirmados
- [ ] Página de agradecimento pós-casamento

### 🔧 Configurações Técnicas
- [x] React Router para navegação
- [ ] Formulários com validação
- [ ] Integração com API/backend (se necessário)
- [ ] Deploy (Vercel/Netlify)

---

## Próximos Passos

1. Adicionar conteúdo real em cada página
2. Adicionar fotos do casal
3. Configurar formulário de confirmação
4. Adicionar mapa da cerimônia
5. Criar lista de presentes
6. Testar responsividade
7. Deploy do site
