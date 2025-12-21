# 🎨 PERSONALIZAÇÃO PRÉ-DEPLOY

Checklist de personalização antes de publicar o site.

---

## ✅ ESSENCIAL (Faça antes do deploy!)

### 1. 📸 Fotos do Casal

**Local:** `public/images/`

Substitua os arquivos:
- `noivo.png` - Foto principal do noivo
- `noiva.png` - Foto principal da noiva
- `noivo_secret.jpeg` - Foto easter egg do noivo (aparece após 5 cliques)
- `noiva_secret.jpeg` - Foto easter egg da noiva (aparece após 5 cliques)

**Dica:** Use fotos de boa qualidade (pelo menos 500x500px)

---

### 2. 📅 Data do Casamento

**Arquivo:** `src/pages/Home.jsx`

**Linha ~8:**
```javascript
const dataEvento = new Date('2024-12-31T19:00:00');
```

Mude para a data do seu casamento no formato: `YYYY-MM-DDTHH:MM:SS`

**Exemplo:**
```javascript
const dataEvento = new Date('2025-06-15T18:00:00'); // 15 de junho de 2025, 18h
```

---

### 3. 💰 Chave PIX

**Arquivo:** `src/pages/ListaPresentes.jsx`

**Linha ~21:**
```javascript
const chavePix = 'seuemail@exemplo.com';
```

Substitua por sua chave PIX real:
- Email
- CPF
- Telefone
- Chave aleatória

**Exemplo:**
```javascript
const chavePix = 'casamento@exemplo.com';
// ou
const chavePix = '12345678900';
// ou
const chavePix = '+5511999999999';
```

---

### 4. 📍 Local da Cerimônia

**Arquivo:** `src/pages/ACerimonia.jsx`

**Linhas ~11-28:** Atualize as informações:

```javascript
// Local
<h2>Capela Santa Maria</h2>
<p>Rua das Flores, 123 - Centro</p>

// Data e Hora
<h3>15 de Junho de 2025</h3>
<p>Cerimônia: 18h00</p>
<p>Recepção: 19h30</p>

// Link do Google Maps
<a href="https://maps.google.com/?q=SEU_ENDERECO_AQUI">
```

---

## 🎨 RECOMENDADO

### 5. 💑 História do Casal

**Arquivo:** `src/pages/OCasal.jsx`

**Linhas ~18-30:** Reescreva sua história:

```javascript
<div className="bg-white/80 p-8 rounded-lg shadow-md">
  <p className="text-gray-700 leading-relaxed mb-4">
    Sua história aqui...
  </p>
  <p className="text-gray-700 leading-relaxed mb-4">
    Continuação da história...
  </p>
</div>
```

---

### 6. 📅 Timeline do Relacionamento

**Arquivo:** `src/pages/OCasal.jsx`

**Linhas ~36+:** Adicione/edite eventos:

```javascript
<div className="border-l-4 border-[#767745] pl-6 mb-6">
  <div className="bg-[#767745] text-white px-4 py-1 rounded-full inline-block mb-2">
    2020
  </div>
  <h4 className="text-xl font-semibold text-gray-800 mb-2">
    Primeiro Encontro
  </h4>
  <p className="text-gray-600">
    Nos conhecemos em um café...
  </p>
</div>
```

**Adicione quantos eventos quiser!**

---

### 7. 🎁 Lista de Presentes

**Arquivo:** `public/assets/static/presentes.json`

**Estrutura de cada presente:**
```json
{
  "id": 1,
  "nome": "Nome do Presente",
  "preco": 150.00,
  "descricao": "Descrição breve do presente",
  "imagem": "nome-imagem.png",
  "prioridade": 1
}
```

**Campos:**
- `id`: Número único (1, 2, 3...)
- `nome`: Nome do presente
- `preco`: Valor em reais (use ponto, não vírgula)
- `descricao`: Descrição curta
- `imagem`: Nome da imagem (deve estar em `public/assets/presentes/`)
- `prioridade`: 1 (alta), 2 (média), 3 (baixa)

**Exemplo:**
```json
{
  "id": 1,
  "nome": "Jogo de Panelas",
  "preco": 299.90,
  "descricao": "Conjunto completo de panelas antiaderentes",
  "imagem": "panelas.jpg",
  "prioridade": 1
}
```

**Adicionar nova imagem:**
1. Coloque a imagem em `public/assets/presentes/`
2. Use o nome no campo `imagem`

---

### 8. 🎮 Hobbies e Interesses

**Arquivo:** `src/pages/OCasal.jsx`

**Linhas ~100+:** Personalize os hobbies:

```javascript
<div className="bg-white/80 p-6 rounded-lg text-center">
  <div className="text-5xl mb-3">🎮</div>
  <h4 className="font-semibold text-gray-800 mb-2">Games</h4>
  <p className="text-gray-600 text-sm">
    RPG, aventura, estratégia...
  </p>
</div>
```

**Emojis disponíveis:** 🎮🍕📚🎬🎵🏃‍♂️🎨📷🌍🍔☕🎭🏖️...

---

## 🎨 OPCIONAL (Mas legal!)

### 9. 🌈 Cores do Tema

**Arquivo:** `tailwind.config.js`

Mude as cores personalizadas:

```javascript
extend: {
  colors: {
    'wedding-green': '#767745',  // Verde Oliva
    'wedding-pink': '#c0afad',   // Rosa Acinzentado
  }
}
```

Substitua pelos códigos hex das suas cores.

**Onde encontrar cores:** https://colorhunt.co/

---

### 10. 🎭 Personagens de RPG (Se não jogar, remova)

**Arquivo:** `src/pages/OCasal.jsx`

**Linhas ~130+:** Edite ou remova:

```javascript
<div className="text-center">
  <img 
    src="/images/chars/nassima.png" 
    alt="Nassima" 
    className="w-32 h-32 mx-auto mb-2"
  />
  <h4 className="font-semibold">Seu Personagem</h4>
  <p className="text-gray-600">Classe e descrição</p>
</div>
```

**Para remover completamente:**
Delete a seção "Nossos Personagens de RPG" (linhas ~125-160)

---

### 11. 📝 Nomes dos Noivos

Substitua `[Noivo]` e `[Noiva]` em todos os arquivos:

**Busca global (VS Code):**
- Pressione `Ctrl + Shift + F`
- Busque por: `[Noivo]` e `[Noiva]`
- Substitua pelos nomes reais

**Ou edite manualmente:**
- `src/pages/Home.jsx`
- `src/pages/OCasal.jsx`
- `src/pages/ACerimonia.jsx`

---

### 12. 🐰 Easter Eggs (Opcional - remover ou personalizar)

**Fotos dos noivos (5 cliques):**
- Já configurado em `src/pages/OCasal.jsx`
- Troque `noivo_secret.jpeg` e `noiva_secret.jpeg` por suas fotos

**Konami Code (↑ ↑ ↓ ↓ ← → ← → B A):**
- Implementado em `src/pages/OCasal.jsx`
- Personalize a mensagem na linha ~170

**Para remover easter eggs:**
Veja instruções em `EASTER-EGG.md`

---

## 🔍 VERIFICAÇÃO FINAL

Antes de fazer `npm run deploy`, confira:

- [ ] Fotos trocadas (`noivo.png`, `noiva.png`, etc.)
- [ ] Data do casamento atualizada
- [ ] Chave PIX configurada
- [ ] Local da cerimônia atualizado
- [ ] História do casal personalizada
- [ ] Timeline ajustada
- [ ] Lista de presentes configurada
- [ ] Nomes dos noivos substituídos
- [ ] Hobbies personalizados (opcional)
- [ ] Cores ajustadas (opcional)

---

## 🧪 TESTAR ANTES DO DEPLOY

Execute:

```bash
# 1. Build
npm run build

# 2. Preview local
npm run preview
```

Acesse: `http://localhost:4173/casamento-react-2/`

**Teste:**
- ✅ Todas as páginas carregam
- ✅ Imagens aparecem
- ✅ Links funcionam
- ✅ Informações corretas
- ✅ PIX gera QR Code
- ✅ Easter eggs funcionam (se manteve)

---

## 🚀 PRONTO PARA DEPLOY?

Execute:

```bash
npm run deploy
```

Veja o guia completo em `3-PASSOS.md`.

---

## 💡 DICAS FINAIS

### Fotos Otimizadas
- Use formato: JPG ou PNG
- Tamanho recomendado: 500x500px a 1000x1000px
- Não use arquivos muito grandes (> 2MB)

### Teste no Celular
- Após o deploy, teste no celular
- Verifique se tudo está responsivo

### Backup
- Guarde uma cópia dos arquivos originais
- Faça commits frequentes no Git

### Texto
- Revise ortografia e gramática
- Peça para alguém revisar

---

## 📞 Precisa de Ajuda?

Veja a documentação específica:
- **Presentes:** `PRESENTES-README.md`
- **Easter Eggs:** `EASTER-EGG.md`
- **Deploy:** `3-PASSOS.md` ou `DEPLOY-RAPIDO.md`

---

Boa personalização e feliz casamento! 💍✨
