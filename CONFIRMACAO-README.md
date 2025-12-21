# 🎉 Página de Confirmação - Firebase & Códigos

## 🎫 CÓDIGOS ESPECIAIS

- **M0M0** → Ver relatório completo de todos os convidados
- **ADMIN** → Painel de administração (futuro)  
- **TESTE** → Código de teste (Carolina & Alexandre)

## 📊 ESTATÍSTICAS ATUAIS

- Total de convites: **27**
- Total de pessoas: **89**
- Confirmados: **4 pessoas** (4.5%)
- Pendentes: **85 pessoas** (95.5%)

### ✅ Já Confirmaram:
- **QWE12** - Cássia Fredegotto (1 pessoa)
- **HJK23** - Gi, Edilene, Ernesto (3 pessoas)

## 🔥 COMO VERIFICAR NO FIREBASE

### 1. Console do Firebase:
```
URL: https://console.firebase.google.com/project/casamento-react/database
```

### 2. Ver no seu site:
```
Execute: npm run dev
Acesse: /confirmacao
Digite: M0M0
```

### 3. Via terminal:
```bash
node scripts/listarCodigos.cjs
```

## ✨ O que mudou?

A página de confirmação foi completamente reformulada com base em um sistema de códigos de convite e gerenciamento de confirmações.

### Funcionalidades principais:

1. **Sistema de Códigos de Convite**
   - Cada convite tem um código único
   - Os convidados digitam o código para confirmar presença
   - Exemplo de código: `TESTE`

2. **Seleção de Convidados**
   - Ao digitar o código, aparecem todos os nomes do convite
   - Marque quem irá comparecer com checkboxes
   - Possível alterar até a data limite (01/05/2026)

3. **Código Especial "M0M0"**
   - Digite `M0M0` para visualizar todos os convidados
   - Mostra relatório completo de confirmações
   - Duas vistas: Por Convite ou Lista Simples

4. **Lista Simples**
   - Mostra apenas os nomes confirmados
   - Botão para copiar lista completa
   - Útil para organização do evento

5. **Feedback Visual**
   - Mensagens de confirmação com ícones
   - Cores diferentes para confirmados/não confirmados
   - Estatísticas em tempo real

## 🧪 Como testar:

1. Acesse a página de Confirmação
2. Digite o código: `TESTE`
3. Marque os convidados que irão
4. Clique em "Confirmar Presença"

### Código especial de administração:
- Digite `M0M0` para ver o relatório completo

## 📁 Estrutura de Dados

Os convidados estão em `src/data/convidados.json`:

```json
[
  {
    "codigo": "TESTE",
    "nomes": ["Carolina Fredegotto", "Alexandre Fuzeti"],
    "confirmados": [],
    "confirmado": false
  }
]
```

### Campos:
- `codigo`: Código único do convite
- `nomes`: Array com nomes dos convidados
- `confirmados`: Array com nomes de quem confirmou
- `confirmado`: Boolean se alguém confirmou
- `dataConfirmacao`: Data/hora da confirmação

## 🔧 Próximos passos (opcional):

### Integração com Firebase:
1. Crie um projeto no Firebase
2. Adicione as credenciais em `src/firebase/config.js`
3. Atualize as funções de busca e confirmação

### Backend próprio:
1. Crie uma API REST
2. Atualize as funções `buscarConvidado` e `confirmarPresenca`
3. Substitua os dados mock por chamadas à API

## 💡 Dicas:

- **Header**: Clica no header e volta para o topo da página
- **Responsivo**: Funciona em mobile e desktop
- **Códigos**: Use códigos curtos e fáceis de lembrar
- **Data limite**: Ajuste em `DATA_LIMITE` no código

## 🎨 Personalização:

As cores e estilos seguem o tema do casamento:
- Verde oliva: `#767745`
- Rosa: `#c0afad`

## 📊 Estatísticas mostradas:

- Total de convites
- Convites confirmados
- Convites não confirmados
- Total de pessoas confirmadas

## 🔒 Segurança:

**Atenção**: Este é um sistema básico. Para produção:
- Adicione autenticação
- Valide dados no backend
- Use HTTPS
- Implemente rate limiting
- Proteja códigos sensíveis
