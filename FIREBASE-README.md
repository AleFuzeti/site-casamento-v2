# 🔥 Guia Completo do Firebase

## 📋 O que você tem

### Códigos Especiais:
- **M0M0**: Ver relatório completo de todos os convidados
- **ADMIN**: Painel de administração (futuro)
- **TESTE**: Código de teste (Carolina & Alexandre)

### Códigos de Convite (do convidados.json):
```
QWE12 - Cássia Fredegotto, Edson Akira Ito
RTY34 - Marina Fredegotto, Rafael Sakai, Kauê Sakai, Lara Sakai
UIO56 - Marina Fredegotto
PAS78 - Cecilia Fredegotto, Valdir
DFG91 - Ida, gilson, Lucas
HJK23 - Ernesto, Edilene, Gi, Mateus, Bel
LZX45 - Bia, namo, Lucas
CVB67 - Efren, Prima, Prima, Nara, marido nara
NMQ89 - Primo, Primo, F primo, M primo, Cris, Tio
qaz14 - Joana, Rober, Luigi, Vih, namo, namo
wsx25 - Ana, Bruna, Sol, Ay, Renan, Icaro
edc63 - Bruna, Namo, Lucas
rfv74 - Tata, Deva, Julia, Gabriel, Livia, Luiza, Namo
tgb85 - Marco, Bia, Lais
yhn96 - Vini, Arthur, Kenzo
ujm98 - Ana, vitor
iko76 - ji, jader
lpq47 - (sem nomes)
qaw48 - (sem nomes)
zse59 - Synthia, edw, Eduardo, Bianca
xdr67 - Wand, iara, Guilherme, Henrique
cft15 - Val, sergio, Arthur, Débora
vgy26 - Cleiton, maíra, filha
bhu34 - Ro, thais, bella, rodriguinho
nji97 - Pai +4?
mko64 - Pri, gu, biel, gigi
lpq31 - Mãe, guto
```

## 🚀 Como Usar o Firebase

### Opção 1: Verificar no Console do Firebase (Recomendado)

1. **Acesse o Firebase Console:**
   - URL: https://console.firebase.google.com/
   - Login com sua conta Google

2. **Selecione seu projeto:**
   - Nome: `casamento-react`

3. **Vá para Realtime Database:**
   - Menu lateral → "Realtime Database"
   - Você verá todos os dados em tempo real

4. **Configurar Regras de Segurança:**
   - Na aba "Regras", adicione:
   ```json
   {
     "rules": {
       "convidados": {
         ".read": true,
         ".write": true
       }
     }
   }
   ```

### Opção 2: Migrar Dados do JSON para Firebase

**Método A - Via Script (Node.js):**

```bash
# No terminal, execute:
node scripts/migrateToFirebase.js
```

**Método B - Via Interface Web:**

1. Execute o projeto: `npm run dev`
2. Acesse a página de Confirmação
3. Digite o código: **M0M0**
4. Você verá todos os convidados
5. (Implementar botão "Migrar para Firebase" se necessário)

**Método C - Manual no Firebase Console:**

1. Acesse Firebase Console → Realtime Database
2. Clique no "+" para adicionar dados
3. Cole o conteúdo do arquivo `src/data/convidados.json`

## 🔍 Como Verificar os Códigos

### No Firebase Console:

1. Acesse: https://console.firebase.google.com/project/casamento-react/database
2. Expanda o nó "convidados"
3. Cada entrada tem:
   - `codigo`: O código do convite
   - `nomes`: Lista de nomes
   - `confirmados`: Lista de quem confirmou
   - `confirmado`: true/false
   - `dataConfirmacao`: Quando foi confirmado

### No Seu Site:

1. Execute `npm run dev`
2. Acesse `/confirmacao`
3. Digite: **M0M0**
4. Você verá o relatório completo com todos os códigos

## 📊 Estrutura dos Dados no Firebase

```
casamento-react-default-rtdb/
└── convidados/
    ├── -ABC123xyz/
    │   ├── codigo: "QWE12"
    │   ├── nomes: ["Cássia Fredegotto", "Edson Akira Ito"]
    │   ├── confirmados: ["Cássia Fredegotto"]
    │   ├── confirmado: true
    │   └── dataConfirmacao: "2025-12-14T..."
    ├── -DEF456abc/
    │   ├── codigo: "RTY34"
    │   ├── nomes: [...]
    │   └── ...
    └── ...
```

## 🛠️ Troubleshooting

### Erro: "Permission denied"
- Configure as regras de segurança (veja acima)

### Erro: "Firebase not initialized"
- Verifique se instalou: `npm install firebase`
- Verifique o arquivo `src/firebase/config.js`

### Dados não aparecem
- Execute a migração primeiro
- Verifique no Firebase Console se os dados existem

## 📝 Próximos Passos

1. ✅ Instalar Firebase SDK
2. ✅ Configurar Firebase (`src/firebase/config.js`)
3. ✅ Criar serviço de convidados (`src/services/convidadosService.js`)
4. 🔄 Migrar dados para Firebase
5. 🔄 Atualizar página de Confirmação para usar Firebase
6. 🔄 Testar confirmações em tempo real
7. 🔄 Configurar regras de segurança

## 🎯 Vantagens do Firebase

- ✅ Dados em tempo real
- ✅ Sincronização automática
- ✅ Backup na nuvem
- ✅ Não precisa de servidor backend
- ✅ Grátis para projetos pequenos
- ✅ Fácil de escalar
