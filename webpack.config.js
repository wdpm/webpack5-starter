const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
console.debug({mode})

module.exports = {
    mode: mode,
    // index.js:11 line in chrome dev console
    devtool: "source-map",// has source map?
    module: {
        rules: [
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
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin()
    ],
    devServer: {
        // localhost:8080/dist/
        contentBase: './dist/',
        hot: true
    }
}
