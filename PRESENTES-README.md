# 🎁 Sistema de Lista de Presentes com PIX

## 📋 Visão Geral

A página de Lista de Presentes foi completamente modernizada para oferecer uma experiência interativa e integrada com pagamento via PIX. Os presentes são carregados dinamicamente de um arquivo JSON e cada item pode ser presenteado através de PIX com QR Code.

---

## ✨ Funcionalidades

### 1. **Carregamento Dinâmico**
- ✅ Todos os presentes são carregados do arquivo `public/assets/static/presentes.json`
- ✅ Exibição automática de imagens dos presentes
- ✅ Fallback para imagem padrão caso a imagem não carregue

### 2. **Ordenação Inteligente**
- 🔢 **Relevância**: Ordem original do arquivo JSON
- ⬇️ **Menor Preço**: Ordena do mais barato ao mais caro
- ⬆️ **Maior Preço**: Ordena do mais caro ao mais barato

### 3. **Pagamento via PIX**
- 💰 Cada presente tem um botão "Presentear via PIX"
- 🎯 Código PIX gerado automaticamente com o valor do presente
- 📱 QR Code gerado em tempo real para pagamento
- 📋 Código copia e cola com botão de copiar
- ✅ Feedback visual quando o código é copiado

### 4. **Interface Moderna**
- 🎨 Design responsivo e elegante
- 🖼️ Cards com imagens dos presentes
- 💝 Overlay modal com instruções de pagamento
- 🎭 Animações suaves e transições

---

## 📂 Estrutura de Arquivos

```
casamento-react-2/
├── src/
│   └── pages/
│       └── ListaPresentes.jsx        # Componente principal
└── public/
    └── assets/
        ├── static/
        │   └── presentes.json        # Lista de presentes
        └── presentes/
            ├── geladeira.jpg         # Imagens dos presentes
            ├── panelas.jpg
            ├── ...
```

---

## 🎯 Como Funciona

### 1. Arquivo JSON (presentes.json)

```json
[
  {
    "nome": "Geladeira",
    "preco": 3500,
    "foto": "geladeira.jpg"
  },
  {
    "nome": "Jogo de Panelas",
    "preco": 650,
    "foto": "panelas.jpg"
  }
]
```

**Campos:**
- `nome`: Nome do presente (string)
- `preco`: Valor em reais (number, sem formatação)
- `foto`: Nome do arquivo da imagem (string, sem caminho)

**Importante**: O código automaticamente adiciona o caminho `/assets/presentes/` antes do nome do arquivo.

### 2. Geração do PIX

Quando o usuário clica em "Presentear via PIX":

1. **Código PIX é gerado** seguindo o padrão EMV do Banco Central
   - Chave PIX é formatada corretamente
   - Nome e cidade são limitados ao tamanho permitido
   - Valor é formatado com 2 casas decimais
   - CRC16 é calculado automaticamente

2. **QR Code é criado** usando a biblioteca `qrcode`
   - Tamanho: 300x300 pixels
   - Margem: 2 unidades
   - Correção de erros: Média (M)
   - Formato: PNG (base64)

3. **Modal é aberto** com:
   - Imagem do presente
   - Valor a pagar
   - QR Code para escanear
   - Código copia e cola
   - Instruções passo a passo
   - Dados do beneficiário

### 3. Informações do PIX

**Configuração atual:**
- **Chave PIX**: +5543988030433
- **Nome**: Alexandre Fuzeti Bertipaglia
- **Cidade**: Londrina

Para alterar, edite no arquivo `ListaPresentes.jsx`:

```javascript
const codigo = gerarPixCopiaCola(
  '+5543988030433',              // Sua chave PIX
  'ALEXANDRE FUZETI BERTIPAGLIA', // Seu nome
  'Londrina',                     // Sua cidade
  presente.preco,
  presente.nome
)
```

---

## 🖼️ Como Adicionar Novos Presentes

### 1. Adicione a imagem do presente

Coloque a imagem na pasta `public/assets/presentes/`:

```
public/assets/presentes/
├── novo-presente.jpg
```

**Formatos aceitos**: JPG, PNG, GIF, WEBP

### 2. Atualize o JSON

Adicione o novo presente em `public/assets/static/presentes.json`:

```json
{
  "nome": "Novo Presente",
  "preco": 450,
  "foto": "novo-presente.jpg"
}
```

**⚠️ ATENÇÃO**: 
- Use apenas o nome do arquivo em `foto`, não o caminho completo
- O preço deve ser um número, sem R$ ou formatação
- O código adiciona automaticamente `/assets/presentes/` antes do nome

### 3. Pronto!

O presente aparecerá automaticamente na página. Não precisa editar o código JSX.

---

## 🎨 Personalização

### Alterar cores do tema

Edite `tailwind.config.js`:

```javascript
colors: {
  wedding: {
    olive: '#6B7C5D',   // Cor principal
    rose: '#D4A5A5',    // Cor secundária
  }
}
```

### Alterar layout dos cards

Edite a grid em `ListaPresentes.jsx`:

```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
```

---

## 🔧 Tecnologias Utilizadas

- **React**: Framework UI
- **React Icons**: Ícones (FiGift, FiCopy, etc)
- **qrcode**: Geração de QR Codes
- **Tailwind CSS**: Estilização
- **Fetch API**: Carregamento do JSON

---

## 📱 Responsividade

A página é totalmente responsiva:

- 📱 **Mobile**: 1 coluna
- 💻 **Tablet**: 2 colunas
- 🖥️ **Desktop**: 3-4 colunas
- 📺 **XL**: 4 colunas

---

## ⚠️ Troubleshooting

### Imagens não aparecem

**Problema**: As imagens dos presentes não carregam.

**Solução**:
1. Verifique se as imagens estão em `public/assets/presentes/`
2. Confirme que os nomes no JSON correspondem aos nomes dos arquivos
3. Use apenas o nome do arquivo no campo `foto` (ex: `"foto": "geladeira.jpg"`)
4. Verifique no console do navegador (F12) se há erros de carregamento
5. As imagens devem ter nomes sem espaços ou caracteres especiais

**Exemplo correto**:
```json
{
  "nome": "Geladeira",
  "preco": 3500,
  "foto": "geladeira.jpg"  ✅ CORRETO
}
```

**Exemplo errado**:
```json
{
  "nome": "Geladeira",
  "preco": 3500,
  "foto": "/assets/presentes/geladeira.jpg"  ❌ ERRADO
}
```

### QR Code não gera

**Problema**: O QR Code não aparece no modal.

**Solução**:
1. Verifique se o pacote `qrcode` está instalado:
   ```bash
   npm install qrcode
   ```
2. Abra o console do navegador (F12) e verifique se há erros
3. Teste com um presente de valor menor primeiro
4. Verifique se a chave PIX está correta (formato: +5543988030433)
5. Reinicie o servidor de desenvolvimento

**Logs importantes**:
- "Presente selecionado:" - mostra dados do presente
- "Código PIX completo:" - mostra o código gerado
- "QR Code gerado com sucesso" - confirma geração do QR

### Código PIX inválido

**Problema**: App do banco não reconhece o código PIX.

**Solução**:
1. Verifique se a chave PIX está no formato correto (+5543988030433)
2. O nome do beneficiário é limitado a 25 caracteres automaticamente
3. A cidade é limitada a 15 caracteres automaticamente
4. O código PIX é gerado seguindo o padrão EMV do Banco Central
5. Teste em diferentes apps de banco (alguns podem ter validações mais rígidas)

**Validação do código**:
- Deve começar com "00020126"
- Deve conter "br.gov.bcb.pix"
- Deve terminar com 4 dígitos hexadecimais (CRC16)

### Código PIX não copia

**Problema**: Botão de copiar não funciona.

**Solução**:
1. Alguns navegadores bloqueiam a função de copiar
2. Tente usar HTTPS em vez de HTTP
3. Copie manualmente o código selecionando o texto
4. Verifique se há uma mensagem de permissão no navegador

### Ordenação não funciona

**Problema**: Botões de ordenação não mudam a ordem dos presentes.

**Solução**:
1. Verifique se os presentes foram carregados (não está em "Carregando...")
2. Abra o console (F12) e veja se há erros
3. Tente recarregar a página (Ctrl+F5)

### JSON não carrega

**Problema**: "Carregando presentes..." não sai da tela.

**Solução**:
1. Verifique o console do navegador (F12) - procure por erros de fetch
2. Confirme que `presentes.json` existe em `public/assets/static/`
3. Valide o JSON em https://jsonlint.com/
4. Verifique se não há vírgulas extras ou faltando
5. Certifique-se de que o servidor está rodando (npm run dev)

**Estrutura correta do JSON**:
```json
[
  {
    "nome": "Presente 1",
    "preco": 100,
    "foto": "presente1.jpg"
  },
  {
    "nome": "Presente 2",
    "preco": 200,
    "foto": "presente2.jpg"
  }
]
```

### Modal não abre

**Problema**: Clicar em "Presentear via PIX" não abre o modal.

**Solução**:
1. Abra o console (F12) e veja se há erros
2. Verifique se o QR Code foi gerado (veja os logs)
3. Tente com um presente diferente
4. Recarregue a página

### Mensagem de erro ao gerar PIX

**Problema**: "Erro ao gerar código PIX. Por favor, tente novamente."

**Solução**:
1. Verifique os logs no console para detalhes
2. Confirme que todos os dados do presente estão corretos
3. Verifique se o valor não é zero ou negativo
4. Tente com um presente de valor diferente

---

## 🚀 Como Testar

### 1. Inicie o servidor

```bash
npm run dev
```

### 2. Acesse a página

```
http://localhost:5173
```

### 3. Navegue até "Lista de Presentes"

### 4. Teste as funcionalidades

- ✅ Clique nos botões de ordenação
- ✅ Clique em "Presentear via PIX" em algum presente
- ✅ Verifique se o QR Code aparece
- ✅ Copie o código PIX
- ✅ Teste o QR Code em um app de banco (ambiente de teste)

---

## 📊 Estatísticas do Código

- **Linhas de código**: ~300
- **Componentes**: 1 (ListaPresentes)
- **Estados**: 7 (presentes, filtrados, overlay, etc)
- **Funções**: 8 (carregar, ordenar, gerar PIX, etc)

---

## 🎯 Próximos Passos (Opcional)

### Melhorias Futuras

- [ ] **Marcar presentes como "já presenteados"**
  - Integrar com Firebase ou backend
  - Exibir badge "Indisponível" nos presentes escolhidos

- [ ] **Filtros por categoria**
  - Cozinha, Quarto, Banheiro, etc
  - Dropdown ou tabs

- [ ] **Busca de presentes**
  - Input de busca por nome
  - Filtro em tempo real

- [ ] **Histórico de presentes**
  - Lista de quem presenteou o quê
  - Painel administrativo

- [ ] **Confirmação de pagamento**
  - Webhook do PIX
  - Email de confirmação automático

- [ ] **Valor personalizado**
  - Permitir que o convidado escolha quanto contribuir
  - "Presente livre" com valor a definir

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique este README
2. Consulte a documentação do React
3. Verifique o console do navegador (F12)

---

## 📝 Licença

Este projeto é para uso pessoal do casamento de Carolina & Alexandre.

---

**Desenvolvido com ❤️ para o casamento mais especial!**
