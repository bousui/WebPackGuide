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
};

// htmlファイルのパスを取得
const path = require('path');
const filename = '/index.html';
const srcpath = path.dirname(module.exports.entry) + filename;
const distpath = module.exports.output.path + filename;

// ファイルを出力先にコピー
const fs = require('fs');
fs.copyFileSync(srcpath, distpath);
