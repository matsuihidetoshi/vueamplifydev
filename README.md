# Amplify + Vue.js Hands On

Amplify + Vue.js で簡単にサーバーレスPWAを構築するためのリポジトリです。  
Chrome, Cloud9, GitHubを使う想定です。  
なお、AWSのアカウント管理や、Cloud9などの環境設定は最低限のものになります。  
したがって、実際の運用に際しては、よりセキュアな設定を別途行う事を推奨します。  
Cloud9環境をChromeにて表示した状態の想定で構築の手順を以下に記します。

## このリポジトリのクローン

必要コードを転用するため、このリポジトリを環境にクローン

```
git clone https://github.com/matsuihidetoshi/vueamplifydev.git
```

## 必要CLIツールインストール

今回のアプリケーションの構築のために、Vue.jsのプロジェクトを容易に作成できるVue CLIと  
Amplifyによってアプリケーションのフロントエンド・バックエンドをコマンドで容易に構築できるAmplify CLIの
二つのCLIが必要なので、そのインストールを実施します。

#### Vue.jsプロジェクトを作成するためにVue CLIをインストール

```
npm i -g @vue/cli
```

#### Amplifyをプロジェクトに導入し、各種機能を追加するための操作をするためにAmplify CLIをインストール

```
npm i -g @aws-amplify/cli
```

## Vue.jsプロジェクトを作成

Vue CLIを使って、必要な設定を行いながらVue.jsプロジェクトを作成していきます。

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

このままでは、Cloud9の仕組み上、起動した開発環境のサーバーをうまくプレビューできないため  
設定を追加します。

#### 設定ファイルの追加

vueamplifydev/vue.config.jsをnotes/vue.config.jsとなる様にコピー

## テスト起動

開発環境のローカルサーバーを起動してプレビューし、問題なくVue.jsプロジェクトが  
立ち上がることを確認します。

#### Vue.jsプロジェクトフォルダ(notes)に移動

```
cd notes
```

#### サーバー起動

```
npm run serve
```

Cloud9画面の上部のPreview→Preview Running Applicationを選択し、Vue.jsのデフォルト画面が表示されればOK  
*そのままサーバーは起動したまま、別ターミナルを開き、notesディレクトリに移動して以降の作業を実施

## Amplify初期設定

Amplify CLIを使用して各種機能追加に伴うコードの生成やAWSリソースの追加を自動で行うことができます。  
AWSのリソースの操作をCLIから行える様にするために、専用のIAMユーザーの追加と認証情報の設定を行う必要があります。

#### Amplify CLIから機能追加・各リソースの構築ができる様に設定

```
amplify configure
```

#### AWSマネジメントコンソールへのリンクが表示されるが、そのままEnter

```
Follow these steps to set up access to your AWS account:

Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue
```

#### AWSリソースのリージョン選択(↑↓でカーソル移動、Enterで決定)

下記の通りap-northeast-1を選択

```
Specify the AWS Region
? region:  
  eu-west-1 
  eu-west-2 
  eu-central-1 
❯ ap-northeast-1 
  ap-northeast-2 
  ap-southeast-1 
  ap-southeast-2 
(Move up and down to reveal more choices)
```

#### Amplify用IAMユーザーの追加(ユーザー名を入力しEnter)

任意だが今回はデフォルトのユーザー名を使用(そのままEnter)

```
Specify the username of the new IAM user:
? user name:  (amplify-xxxxx) 
```

#### IAMユーザー作成画面を開く

下記の様に案内されるURLを開く

```
Complete the user creation using the AWS console
https://console.aws.amazon.com/iam/home?region=undefined#/users$new?step=final&accessKey&userNames=amplify-xxxxx&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess
Press Enter to continue
```

#### IAMユーザー作成

ブラウザの別タブでAWSマネジメントコンソールのIAMユーザー作成画面が開くので  
ユーザー詳細の設定→アクセス許可の設定→タグの追加 (オプション)→確認まで全てデフォルトのまま進み  
「ユーザーの作成」ボタンを押下

#### IAMユーザーセキュリティ認証情報の取得

IAMユーザーセキュリティ認証情報のページが開くので、「.csvのダウンロード」ボタンを押下  
*このあとすぐダウンロードしたファイル内の情報を使用するため、ブラウザ下部のダウンロードファイルの表示を  
開いたままにするなどし、すぐに開ける様にしておく

#### ターミナル操作に戻る

Cloud9環境の画面に戻る

#### IAMユーザー作成完了

下記の表示の状態で、Enter

```
Complete the user creation using the AWS console
https://console.aws.amazon.com/iam/home?region=undefined#/users$new?step=final&accessKey&userNames=amplify-xxxxx&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess
Press Enter to continue
```

#### アクセスキーIDの入力(アクセスキーIDを入力しEnter)

先ほどダウンロードした.csvファイルをブラウザ下部から開き、Access key IDをコピー  
ターミナルに戻り、ペーストしEnter

```
Enter the access key of the newly created user:
? accessKeyId:  (<YOUR_ACCESS_KEY_ID>) 
```

#### シークレットアクセスキーを入力(シークレットアクセスキーを入力しEnter)

同じく.csvファイルよりSecret access keyをコピー  
ターミナルに戻り、ペーストしEnter

```
? secretAccessKey:  (<YOUR_SECRET_ACCESS_KEY>) 
```

#### プロファイルに名前をつける(プロファイル名を入力しEnter)

デフォルトのままEnter

```
Profile Name:  (default)
```

*ここで、AWS managed temporary credentialsというダイアログが立ち上がり  
Could not update credentialsと表示されるが、「Fource update」ボタンを押下すればOK  
ターミナルは下記のメッセージが出力されていればOK

```
Successfully set up the new user.
```

## Vue.jsプロジェクトをAmplifyプロジェクトとして初期化

Vue.jsプロジェクトをAmplifyプロジェクトとして初期化することで、各種機能追加に伴うコードの自動生成と  
プロジェクトのフロントエンドに紐付いたバックエンドの役割を担う各種AWSリソースの構築を  
CLIから実行することができる様になります。  
この操作が完了すると、同時にAmplifyバックエンドの素体の様なものがCloudFormationによりクラウド上に作成されます。

```
amplify init
```

#### プロジェクト名の設定(プロジェクト名を入力しEnter)

デフォルト(Vue.jsプロジェクトとしての名前:notes)のままEnter

```
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project (notes)
```

#### 環境名の設定(環境名を入力しEnter)

任意だが、今回はdefaultと入力しEnter

```
? Enter a name for the environment default
```

#### エディタの設定(↑↓でカーソル移動、Enterで決定)

Noneを選択しEnter

```
? Choose your default editor: 
  Visual Studio Code 
  Atom Editor 
  Sublime Text 
  IntelliJ IDEA 
  Vim (via Terminal, Mac OS only) 
  Emacs (via Terminal, Mac OS only) 
❯ None
```

#### アプリケーションのタイプを選択(↑↓でカーソル移動、Enterで決定)

javascriptを選択

```
? Choose the type of app that you're building (Use arrow keys)
  android 
  ios 
❯ javascript
```

#### フレームワークを選択(↑↓でカーソル移動、Enterで決定)

vueを選択

```
? What javascript framework are you using (Use arrow keys)
  angular 
  ember 
  ionic 
  react 
  react-native 
❯ vue 
  none
```

#### ソースディレクトリを指定(ソースディレクトリ名を入力しEnter)

デフォルト(src)のままEnter

```
? Source Directory Path:  (src)
```

#### ディストリビューションディレクトリを指定(ディストリビューションディレクトリ名を入力しEnter)

デフォルト(dist)のままEnter

```
? Distribution Directory Path: (dist)
```

#### ビルドコマンドの入力(ビルドコマンドを入力しEnter)

npm run buildと入力しEnter

```
? Build Command:  npm run build
```

#### サーバー起動コマンドを入力(サーバー起動コマンドを入力しEnter)

npm run serveと入力しEnter

```
? Start Command: npm run serve
```

#### AWSプロファイルの使用(y or nを入力しEnter)

yを入力しEnter

```
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? (Y/n) y
```

#### AWSプロファイルを選択(↑↓でカーソル移動、Enterで決定)

先ほど作成したプロファイル(default)を選択しEnter

```
? Please choose the profile you want to use (Use arrow keys)
❯ default
```

下記の様なメッセージが表示されれば成功

```
✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
“amplify console” to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
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
