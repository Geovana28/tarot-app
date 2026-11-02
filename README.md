# 🔮 Tarot Místico — Web & Mobile (React Native / Expo)

Um oráculo interativo completo de Tarot com as **78 cartas (Arcanos Maiores e Menores)**, múltiplos métodos de tiragem, síntese holística/IA, glossário ilustrado e diário pessoal de leituras.

---

## ✨ Funcionalidades Principais

- **🃏 Mesa de Tiragem Interativa**:
  - Métodos: *Carta do Dia*, *Passado, Presente e Futuro (3 cartas)*, *Tiragem do Amor*, *Tiragem de Decisão (4 cartas)*, *Cruz Celta (10 cartas)* e *Sim ou Não*.
  - Suporte a cartas **eretas e invertidas** com animação 3D de virada.
  - Efeitos sonoros místicos sintetizados (Web Audio API) e temas visuais personalizáveis.
- **✨ Oráculo de IA & Síntese Holística**:
  - Interpretação integrada das cartas reveladas (com suporte à API Google Gemini no app mobile e síntese mística local 100% offline).
- **📖 Diário Pessoal de Tarot**:
  - Salve suas leituras, registre anotações/intuições, acompanhe sua ofensiva diária (*streak*) no calendário místico e exporte seu histórico.
- **📜 Glossário Completo (78 Cartas)**:
  - Busca rápida por nome, naipe, palavras-chave ou temas (*Amor, Trabalho, Dinheiro, Saúde, Espiritualidade*).

---

## 📂 Estrutura do Repositório

```text
├── index.html          # Aplicação Web (HTML5)
├── style.css           # Estilos, animações 3D e temas da versão Web
├── script.js           # Lógica, banco de 78 cartas e áudio da versão Web
└── tarot-app/          # Aplicativo Mobile Nativo (React Native + Expo)
    ├── App.js          # Navegação principal do App Mobile
    ├── Cartas/         # Baralho ilustrado (78 cartas + verso)
    └── src/            # Componentes, telas, hooks, banco de dados e Oráculo IA
```

---

## 🚀 Como Executar

### 🌐 Versão Web
Basta abrir o arquivo `index.html` diretamente em qualquer navegador moderno (funciona 100% offline).

### 📱 Versão Mobile (React Native / Expo)
1. Acesse a pasta do aplicativo e instale as dependências:
   ```bash
   cd tarot-app
   npm install
   ```
2. (Opcional) Para usar a leitura com a IA do Google Gemini, defina sua chave em um arquivo `tarot-app/.env`:
   ```env
   EXPO_PUBLIC_GEMINI_API_KEY=sua_chave_aqui
   ```
   *(Caso não informe uma chave, o aplicativo utiliza automaticamente o gerador de síntese oracular mística offline).*
3. Inicie o servidor do Expo:
   ```bash
   npx expo start
   ```
   *(Consulte [`tarot-app/README.md`](./tarot-app/README.md) para instruções de como gerar o arquivo `.apk` via EAS Build).*
