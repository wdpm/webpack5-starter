const path = require("path");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
console.debug({mode})

module.exports = {
    mode: mode,
    // index.js:11 line in chrome dev console
    devtool: "source-map",// has source map?
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "images/[hash][ext]" //dist/images/XXX.jpg
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)/,
                // type: "asset/resource" // emit separated files
                // do better: config asset/inline for small images
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // <= 10K use inline base64
                    }
                }
            },
            {
                test: /\.(sc|sa|c)ss$/i,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        // localhost:8080/dist/
        contentBase: './dist/',
        hot: true
    }
}
