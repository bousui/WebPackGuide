// プラグイン読込
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// WebPack設定
module.exports = [{
    // エントリーポイント設定
    entry: './src/assets/js/main.js',

    // ファイルの出力設定
    output: {
        // 出力ディレクトリ名
        path: `${__dirname}/dist/assets/js/`,
        // 出力ファイル名
        filename: '[name].js'
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
        }]
    },

    // プラグイン設定
    plugins: [
        // copy-webpack-plugin設定
        new CopyWebpackPlugin([{
            // コピー元パス
            from: '*.html',
            // 出力ディレクトリ基準のコピー先パス
            to: '../..',
        }], {
            // コピー元の基準パス
            context: './src',
        }),
        new CopyWebpackPlugin([{
            from: './src/assets/images',
            to: '../images',
        }]),
    ],
}, {
    entry: './src/assets/css/main.scss',

    output: {
        path: `${__dirname}/dist/assets/css/`,
        filename: '[name].css'
    },

    mode: 'development',

    module: {
        rules: [{
            // 拡張子が.scssの場合
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                }, {
                    loader: 'sass-loader',
                }],
            }),
        }]
    },

    plugins: [
        // extract-text-webpack-plugin設定
        new ExtractTextPlugin({
            filename: (getPath) => getPath('[name].css')
        }),
    ],
}];
