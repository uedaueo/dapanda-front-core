# dapanda-front-core 入門

## 1. `my-first-webapp` をつくる

既存の dapanda-front-core を `git clone` して、`my-first-webapp` プロジェクトの開発を始める方法を解説します。`my-first-webapp` の文字列は、適宜に読み替えてください。

まずは [README.md](../README.md) を参照して、`git clone https://github.com/uedaueo/dapanda-front-core/ my-first-webapp` からはじめて、`npm run dev` でローカルサーバを起動して、ブラウザで動作確認をするところまで実施します。

続いて、このディレクトリをベースに `my-first-webapp` プロジェクトを開発していきます。

### 1-1. 不要なファイルの削除

まずは次のファイルを削除します。

~~~
.npmignore
README-original.md
~~~

### 1-2. ファイル内容の変更

続いて次のファイルの引用部分を適宜に変更します。

#### 1-2-1. package.json

package-lock.json の内容は `npm update` などで package.json から値がコピーされます。

~~~json
{
  "name": "dapanda-front-core",
  "description": "frontend core for dapanda framework",
  "version": "0.0.7",
~~~

#### 1-2-2. settings.gradle

~~~js
rootProject.name = 'dapanda-front-core'
~~~

#### 1-2-3. build.gradle

~~~gradle
task meta(dependsOn: [metaLabels, metaMessages, metaValidate]) {
    ...
    description "Generate dapanda-front-core sources for typescript by blancoFramework"
}
~~~

#### 1-2-4. README.md

続いて README.md をプロジェクトに沿った内容に書き換えます。

プロジェクトで使用しない記述はバッサリ削除して、dapanda-front-core リポジトリへのリンクを書いておくのが良いでしょう。

~~~md
## 環境作成

[dapanda-front-core / node, npm の導入](https://github.com/uedaueo/dapanda-front-core?tab=readme-ov-file#nvm-%E3%81%AE%E5%B0%8E%E5%85%A5) を参照する。
~~~

### 1-3. ルートページのソースのディレクトリの移動

現在ルートページ(の手書きソース)は `src/samples/pages/HelloVuetify/*` に居ます。`my-first-webapp` 開発のはじめに、ルートページを `src/pages/Homepage/*` に移動して、不要になった `HelloVuetify` を削除します。

#### 1-3-1. meta(xlsx) ファイルの作成と既存ファイル(MenuData)の編集

1. `meta/pages/` に `Homepage.xlsx` を作成する。`meta/samples/pages/HelloVuetify.xlsx` をコピーして作成する
2. `meta/samples/pages/HelloVuetify.xlsx`, `src/samples/pages/HelloVuetify` フォルダを削除する。
3. `src/components/menu/DummyMenuData.ts` から次の `HelloVuetify` への参照を削除する。
~~~js
{
    menuId: 'HelloVuetify01',
    description: 'Vuetify sample 01',
    path: helloVuetifyRouteRecord.path,
    nameId: helloVuetifyRouteRecord.name as string,
    icon: "mdi-information-outline"
},
~~~
4. `build.gradle` の `task metaPages doLast` に次のタスクを追加する。([カレントは当該部分がコメントアウト](https://github.com/uedaueo/dapanda-front-core/blob/d2bc7542feffbfdaf461110c4a6f3832108b8e6a/build.gradle#L322)されているので、コメントを解除すればよい。)
~~~js
ant.blancovuecomponent(metadir: "${projectDir}" + "/meta/pages",
        tmpdir: "${buildDir}/tmpPages",
        targetdir: "${projectDir}/blanco/main/typescript",
        targetStyle: "free",
        sheetType: 'php',
        encoding: getProperty("blanco.encoding"),
        verbose: "true",
        tabs: 4,
        searchTmpdir: "${buildDir}/tmpComponents,${buildDir}/tmpObjects",
        lineSeparator: 'LF',
        listClass: "pages.RouteSettings"
)
~~~
5. `gradlew clean meta` を実行する。(`gradlew meta` だと中間生成物フォルダに残る `HelloVuetify` 関連のファイルからファイルが生成されてしまうので注意する。)

#### 1-3-2. `src/pages/Homepage/` 下に3つのファイルを作成する

##### Homepage.html

~~~html
<p>Hello world!</p>
~~~

##### Homepage.scss

~~~scss
// 空です
~~~

##### HomepageSetup.ts

~~~ts
import {computed, onMounted, reactive, ref, SetupContext, watch} from 'vue'

import {HomepageProps} from "%/pages/Homepage/HomepageProps";
import {useI18n} from "vue-i18n";
import {useLocaleSettingStore} from "%/stores/LocaleSettingStore/LocaleSettingStore";
import {storeToRefs} from "pinia";
import {usePageTransitDataStore} from "%/stores/PageTransitDataStore/PageTransitDataStore";
import {DapandaConst} from "@/common/DapandaGlobals";
import {PageTransitData} from "%/common/PageTransitData";

export const homepageSetup = (props: HomepageProps, context: SetupContext) => {
    const pageStore = usePageTransitDataStore();

    onMounted(() => {
        console.log("Homepage#onMounted: dataStatus = " + pageStore.dataStatus);
        if (pageStore.dataStatus === DapandaConst.PageTransitDataStatusSaved || pageStore.dataStatus === DapandaConst.PageTransitDataStatusValid) {

        }
    });

    const { lang } = storeToRefs(useLocaleSettingStore());

    return {};
}
~~~

#### 1-3-3. 動作確認

`npm run dev` を実行してブラウザで動作確認します。`Hwllo world!` が表示されたら成功です。