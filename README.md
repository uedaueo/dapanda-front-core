# dapanda-front-core

このプロジェクトは vue3 + vite + typescript によるフロントエンドアプリケーションを構築するための基本的な枠組みを提供します。

## node, npm の導入

最新のものを導入します。プロジェクト作成時点（2022/04/12）では、以下のものを MacPorts で導入しました。

```aidl
parrot:dapanda-front-core tueda$ node -v
v17.9.0
parrot:dapanda-front-core tueda$ npm -v
8.6.0
```

### nvm の導入

便利そうなので nvm でも良いかも。node と npm のバージョンを合わせてくれるので便利。

nvm を MacPorts で導入後、~/.bash_profile に

```
# nvm
source /opt/local/share/nvm/init-nvm.sh
```

と追記。初回は手動でソース実行。

最新 lts が v16.15.1 だったので（2022/06/29時点）、上田の手元では v17.9.1 と2バージョン入れてみました。

```aidl
parrot:dapanda-front-core tueda$ nvm ls
       v16.15.1
->      v17.9.1
         system
default -> v17.9.1
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v17.9.1) (default)
stable -> 17.9 (-> v17.9.1) (default)
lts/* -> lts/gallium (-> v16.15.1)
```

## プレビュー

デバグモードで実行

```aidl
npm run dev
```

本番モードをローカルプレビュー

```aidl
npm run build
npm run preview
```

## blancoFramework

コンポーネント、ストア、i18nのラベル定義、VeeValidation 定義は blancoFramework により自動生成されます。

### Java 11 の導入

blancoFramework を使用するために、Java 11 を導入しておく必要があります。OpenJDK で良いです。

### コンポーネントの作成

画面等のコンポーネントは以下の手順で作成します。

1. コンポーネント定義書の作成
2. ./gradlew meta を実行
3. ./gradlew metaLabels を実行(忘れると LabelsJa、LabelsEn が空になる)
4. 手動作成するソースコードの作成

* 自動生成されるソースコード（blanco/main/typescript 以下に生成）
  * <ComponentId>.vue : コンポーネント定義
  * <ComponentId>.ts : コンポーネント定義 (composition API)
  * <ComponentId>Props.ts : プロパティ定義 (optional)
  * <ComponentId>Emits.ts : Emits定義 (optional)
* 手動生成するソースコード (src/ 以下に生成)
  * <ComponentId>.html : テンプレート (optional)
  * <ComponentId>Render.ts : render 関数 (optional, テンプレートを使用しない場合は必須)
  * <ComponentId>.scss : スタイルシート (optional)
  * <ComponentId>Setup.ts : setup 関数 (optional)
  * <ComponentId>Data.ts : data 関数 (optional, 非推奨)

### Store の作成

ストアの定義は以下の手順で行います。

1. ストア定義書の作成
2. ./gradlew meta の実行
3. 手動作成するソースコードの作成

* 自動生成されるソースコード（blanco/main/typescript 以下に生成）
  * <StoreId>.ts : store 定義
  * Define<StoreId>Actions.ts : actions 定義
  * Define<StoreId>Getters.ts : getters 定義
  * <StreId>State.ts : state 定義
* 手動生成するソースコード (src/ 以下に生成)
  * <StoreId>Actions.ts : actions 実装
  * <StoreId>Getters.ts : getters 実装

### i18n ラベル定義

作成中

### VeeValidate バリデーション定義

作成中

## プロジェクトの生成

基本的には `git clone` して `npm install` すれば良いだけなので以下の情報は不要となるはずですが、今後のために記述しておきます。

### vite プロジェクトの初期化

node v7 以降で新しいviteプロジェクトを作成する場合は以下のコマンドでプロジェクトを初期化します。

```aidl
npm init vite@latest dapanda-front-core -- --template vue-ts
```

vue-ts を指定していますが、結局、画面上で選択肢が表示されるので選択する必要があります。
init が終わったら、ディレクトリに入って以下を実行します。**（ `git clone` などで既存のプロジェクトを取得した場合はここから始めます。）**

```aidl
npm install
```

以下のコマンドでdebugモードでローカルサーバが立ち上がり、http://localhost:3000/ で動作確認ができます。

```aidl
npm run dev
```

### tsconfig.json の編集

この状態で `npm run build` を実行すると、isolatedModules フラグに関わるエラーが発生します。これは、node_modules に配置された既存のコードまでチェックしてしまうために発生します。isolatedModules 自体は true としておく事が必須とされているので、エラーを避ける為に `"skipLibCheck": true` を tsconfig.json に追記します。

```aidl
{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

参考: https://github.com/vitejs/vite/issues/5814#issuecomment-1021556882

### npm で導入するパッケージの確認

開発開始時には vue 関連のパッケージは 3 未対応のものがある (vuetifyとか)ので、@latest でインス取るしていいかどうか確認する必要がある。

```aidl
$ npm view vuetify
（中略）
dist-tags:
latest: 2.6.4       next: 3.0.0-beta.1  stable: 1.5.24

```

この場合は 

```aidl
npm install vuetify@next
```

とする必要がある。

### @types/node の導入

```aidl
npm install --save-dev @types/node
```

### sass の導入

```aidl
npm install sass@latest
```

### vuetify (3.0.0 beta) の導入

* 4/23 時点では 3.0.0.beta.1 が最新。
  * ただし vue add vuetify だけでは beta.0 が入る
  * **main.ts, App.vue, HelloWorld.vue, vite.config.ts などが上書きされるので注意。**
  * tsconfig.json で "esModuleInterop": true を設定しているが、vite.config.ts で @vuetify/vite-plugin で default export が無いエラーになる（IntelliJ の不具合？）
    * 参考: https://numb86-tech.hatenablog.com/entry/2020/07/11/160159
    * コマンドラインからはコンパイルできるので一旦無視しておく(@ts-ignoreを付与)
* vite プロジェクトであっても、導入に vue-cli (5.0 later) が必要

```aidl
sudo npm install -g @vue/cli
```

```aidl
$ vue --version
@vue/cli 5.0.4
```

```aidl
vue add vuetify
```

```aidl
? Choose a preset:
  Configure (advanced)
  Default (recommended)
❯ Vite Preview (Vuetify 3 + Vite)
  Prototype (rapid development)
  Vuetify 3 Preview (Vuetify 3)
```

```aidl
✔  Successfully invoked generator for plugin: vue-cli-plugin-vuetify
 vuetify  Discord community: https://community.vuetifyjs.com
 vuetify  Github: https://github.com/vuetifyjs/vuetify
 vuetify  Support Vuetify: https://github.com/sponsors/johnleider
```

```aidl
npm install vuetify@v3.0.0-beta.1
```

### vue-router の導入

```aidl
npm install vue-router@latest 
```

```router.ts

```

### pinia の導入

```aidl
npm install pinia@latest
```

### vue-i18n の導入

```aidl
npm install vue-i18n@latest
```

### vee-validate の導入

```aidl
npm install vee-validate@latest
npm install @vee-validate/rules@latest
npm install @vee-validate/i18n@latest
```

### axios の導入

```aidl
npm install axios
```

これで @latest が入った模様。0.27.1。

### uuidv4

uuidv4 が、uuid に取り込まれた模様？

```aidl
npm install uuid
npm install --save-dev @types/uuid
```

として、使う時は

```
import { v4 as uuidv4 } from "uuid"
const id = uuidv4();
```

とかする。

### icon, font関連

```aidl
npm install -D @mdi/js
npm install -D @mdi/font
```

### library-mode

* https://vitejs.dev/guide/build.html#library-mode
* https://blog.potproject.net/2022/03/02/vite-vue-react-svelte-js-library-mode
* https://zenn.dev/drop_table_user/articles/7b043bef6cec29

## gradle の導入

### Mac の場合

```aidl
sudo port install gradle@7.4.2
```

### 初期化

```aidl
parrot:dapanda-front-core tueda$ gradle init
Starting a Gradle Daemon (subsequent builds will be faster)

Select type of project to generate:
  1: basic
  2: application
  3: library
  4: Gradle plugin
Enter selection (default: basic) [1..4] 1

Select build script DSL:
  1: Groovy
  2: Kotlin
Enter selection (default: Groovy) [1..2] 2

Generate build using new APIs and behavior (some features may change in the next

Project name (default: dapanda-front-core):

> Task :init
Get more help with your project: Learn more about Gradle by exploring our samples at https://docs.gradle.org/7.4.2/samples

BUILD SUCCESSFUL in 3m 38s
2 actionable tasks: 2 executed
```

### build.gradle を設定

blancoの自動生成用。

## FAQ

### Component is missing template or render function ERROR

* 親コンポーネントの TS ファイルで、コンポーネント import 時に .vue が抜けて居る

```aidl
import HelloVuetify from "@/sample/pages/HelloVuetify/HelloVuetify";
```

これだと ts ファイルを見に行く

```aidl
import HelloVuetify from "@/sample/pages/HelloVuetify/HelloVuetify.vue";
```

コンポーネントをimportするならこうでないといけない。
