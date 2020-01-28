# Amplify + Vue.js Hands On
Amplify + Vue.js で簡単にサーバーレスPWAを構築するためのリポジトリです。  
Cloud9とGitHubを使う想定です。  
構築の手順を以下に記します。

## 必要CLIツールインストール
```
#Vue.jsプロジェクトを作成するためにVue.js CLIをインストール
npm i -g @vue/cli

#Amplifyをプロジェクトに導入し、各種機能を追加するための操作をするためにAmplify CLIをインストール
npm i -g @aws-amplify/cli
```

## Vue.jsプロジェクトを作成
```
#notesというプロジェクト/ディレクトリ名で作成
vue create notes

#Manually(手動設定)を選択(↑↓でカーソル移動、Enterで決定)
Vue CLI v4.1.2
? Please pick a preset: 
  default (babel, eslint) 
❯ Manually select features 

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
