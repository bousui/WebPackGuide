module.exports = {
    // エントリーポイント設定
    entry: './src/main.js',

    // ファイルの出力設定
    output: {
        // 出力ディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        filename: 'main.js'
    },

    // デバッグ・リリースモード設定(development/production)
    mode: 'development',

    // ソースマップ設定
    devtool: 'source-map',

    // ファイル変更の監視モード設定
    watch: false,

    // webpack-dev-server設定
    devServer: {
        // ローカルWebサーバーのルートディレクトリ
        contentBase: 'dist',
        // ページ自動オープン
        open: true,
        // 変更したモジュールだけのリロード
        hot: true,
    },
  
    // モジュール別設定
    module: {
        rules: [{
            // 拡張子が.jsの場合
            test: /\.js$/,
            use: [{
                // Babel設定
                loader: 'babel-loader',
                options: {
                    presets: [
                        // ES2018をES5に変換
                        '@babel/preset-env',
                    ]
                }
            }],

            // 拡張子が.tsの場合
            test: /\.ts$/,
            // TypeScript設定
            use: 'ts-loader',
        }]
    },

    // インポート対象の拡張子設定
    resolve: {
        extensions: [
            '.js', '.ts'
        ]
    }
};

// htmlファイルのパスを取得
const path = require('path');
const filename = '/index.html';
const srcpath = path.dirname(module.exports.entry) + filename;
const distpath = module.exports.output.path + filename;

// ファイルを出力先にコピー
const fs = require('fs');
if (!fs.existsSync(module.exports.output.path)) {
    fs.mkdirSync(module.exports.output.path);
}
fs.copyFileSync(srcpath, distpath);
