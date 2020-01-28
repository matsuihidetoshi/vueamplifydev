# Amplify + Vue.js Hands On
Amplify + Vue.js で簡単にサーバーレスPWAを構築するためのリポジトリです。  
Cloud9とGitHubを使う想定です。  
構築の手順を以下に記します。

## このリポジトリのクローン
必要コードを転用するため、このリポジトリを環境にクローン
```
git clone https://github.com/matsuihidetoshi/vueamplifydev.git
```

## 必要CLIツールインストール
#### Vue.jsプロジェクトを作成するためにVue.js CLIをインストール
```
npm i -g @vue/cli
```
#### Amplifyをプロジェクトに導入し、各種機能を追加するための操作をするためにAmplify CLIをインストール
```
npm i -g @aws-amplify/cli
```

## Vue.jsプロジェクトを作成
#### notesというプロジェクト/ディレクトリ名で作成
```
vue create notes
```
#### Manually(手動設定)を選択(↑↓でカーソル移動、Enterで決定)
```
Vue CLI v4.1.2
? Please pick a preset: 
  default (babel, eslint) 
❯ Manually select features 
```
#### 追加パッケージを選択(↑↓でカーソル移動、Spaceで選択、Enterで決定)
下記の通り、Babel, Progressive Web App (PWA) Support, Router, Vuex, Linter / Formatterを選択
```
? Check the features needed for your project: 
 ◉ Babel
 ◯ TypeScript
 ◉ Progressive Web App (PWA) Support
 ◉ Router
❯◉ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
 ```
 #### Historyモードを選択(y or nを入力しEnter)
 yを選択
 ```
 ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) y
 ```
 #### ESLintの設定を選択(↑↓でカーソル移動、Enterで決定)
 デフォルトのESLint with error prevention onlyを選択
 ```
 ? Pick a linter / formatter config: (Use arrow keys)
❯ ESLint with error prevention only 
  ESLint + Airbnb config 
  ESLint + Standard config 
  ESLint + Prettier 
```
#### Lintのタイミングの設定(↑↓でカーソル移動、Enterで決定)
デフォルトのLint on saveを選択
```
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Lint on save
 ◯ Lint and fix on commit
 ```
#### Configファイルの設定(↑↓でカーソル移動、Enterで決定)
デフォルトのIn dedicated config filesを選択
```
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files 
  In package.json
```
#### 今回の設定を保存指定次回以降に転用するかの選択(y or nを入力しEnter)
任意だが、今回はnを選択
```
? Save this as a preset for future projects? (y/N) n
```
## Vue.jsプロジェクトにCloud9向けの設定を追加
vueamplifydev/vue.config.jsをnotes/vue.config.jsとなる様にコピー
## テスト起動
#### Vue.jsプロジェクトフォルダ(notes)に移動
```
cd notes
```
#### サーバー起動
```
npm run serve
```
Cloud9画面の上部のPreview→Preview Running Applicationを選択し、Vue.jsのデフォルト画面が表示されればOK





# vueamplifydev

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
