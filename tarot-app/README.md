# 🔮 Tarot Místico - Aplicativo Mobile (React Native / Expo)

Este projeto é a versão nativa Android/iOS do **Tarot Místico**, desenvolvida com **React Native**, **Expo** e pronta para gerar arquivo **APK instalável** para Android via **EAS Build**.

---

## 📁 Estrutura do App Criada

```
tarot-app/
├── App.js                     # Entrada principal com navegação por abas
├── app.json                   # Identificador do pacote Android (com.tarotmistico.app)
├── eas.json                   # Configuração prévia para compilar APK
├── package.json               # Dependências do app
└── src/
    ├── components/
    │   └── TarotCard.js       # Carta nativa com animação 3D flip e suporte a invertidas
    ├── data/
    │   ├── cardImages.js      # Mapeamento das imagens locais das cartas
    │   └── tarotData.js       # Banco com todas as 78 cartas e métodos de tiragem
    └── screens/
        ├── MesaScreen.js      # Mesa interativa de tiragem e revelação
        ├── DiarioScreen.js    # Histórico de tiragens persistido (AsyncStorage)
        └── GlossarioScreen.js # Consulta das 78 cartas com filtros por naipe e busca
```

---

## 📲 Passo a Passo para Gerar seu APK (.apk)

Abra o seu terminal (Prompt de Comando ou PowerShell):

### 1. Entrar na pasta do app e instalar as dependências
```bash
cd tarot-app
npm install
```

### 2. Testar o App no Celular (Opcional, em tempo real)
Instale o aplicativo **Expo Go** no seu celular pela Play Store. Depois digite no terminal:
```bash
npx expo start
```
Escaneie o QR Code que aparecer no terminal com o Expo Go ou com a câmera para ver e testar o app na hora!

---

### 3. Gerar o APK com EAS Build (Nuvem - Gratuito e Oficial)

Para compilar o arquivo `.apk` sem precisar instalar o Android Studio:

1. **Instalar o EAS CLI e criar/fazer login na conta Expo (grátis):**
   ```bash
   npm install -g eas-cli
   eas login
   ```
   *(Se não tiver conta, crie rapidamente em [expo.dev](https://expo.dev) gratuitamente)*

2. **Iniciar a compilação do APK:**
   ```bash
   eas build -p android --profile preview
   ```

3. Quando o processo terminar, o terminal exibirá um **link direto para baixar o arquivo `.apk`** e instalar direto no seu celular Android!
