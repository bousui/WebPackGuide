WebPack4標準パッケージ
（Node.jsのインストールが必要）

コマンド
npm i            : 関連パッケージをインストール（初回のみ必要）
npm run build    : ビルド（単回実行）
npm run watch    : ビルド（以降、ソースの更新を監視）
npm run open     : ビルド（以降、ソースの更新を監視してブラウザ更新）

ファイル構成
├─dist
│   ├─assets
│   │   └─js
│   │      ├─main.js             : バンドル後のスクリプトファイル
│   │      └─main.js.map         : デバッグ用のマップファイル
│   └─index.html                 : 成果物のHTMLファイル
├─node_modules
│   └─...                        : 関連パッケージのファイル
├─src
│   ├─assets
│   │   └─js
│   │      ├─babel-module.js     : Babelのサンプルファイル
│   │      ├─jquery-module.js    : jQueryのサンプルファイル
│   │      ├─main.js             : バンドル前のスクリプトファイル
│   │      └─sub-module.js       : WebPackのサンプルファイル
│   └─index.html                 : 成果物としてコピーするHTMLファイル
├─package-lock.json              : Node.jsのロック設定ファイル
├─package.json                   : Node.jsの設定ファイル
├─readme.txt                     : このファイル
└─webpack.config.js              : WebPackの設定ファイル
