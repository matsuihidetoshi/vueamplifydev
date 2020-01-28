# Amplify + Vue.js Hands On
Amplify + Vue.js で簡単にサーバーレスPWAを構築するためのリポジトリです。  
Cloud9とGitHubを使う想定です。  
構築の手順を以下に記します。

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
#### 下記の通り、Babel, Progressive Web App (PWA) Support, Router, Vuex, Linter / Formatterを選択
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
 #### Historyモードを選択(yを入力しEnter)
 ```
 ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) y
 ```
 #### ESLintの設定を選択(↑↓でカーソル移動、Enterで決定)
 #### デフォルトのESLint with error prevention onlyを選択
 ```
 ? Pick a linter / formatter config: (Use arrow keys)
❯ ESLint with error prevention only 
  ESLint + Airbnb config 
  ESLint + Standard config 
  ESLint + Prettier 
```
#### Lintのタイミングの設定(↑↓でカーソル移動、Enterで決定)
#### Lint on saveを選択
```
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Lint on save
 ◯ Lint and fix on commit
 ```










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
