const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, 'src/index.jsx'),
        app: path.resolve(__dirname, 'src/router/App.jsx')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'personal')
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                    'sass-loader'
                ],
                test: /\.scss$/
            },
            {
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 900000
                    }
                },
                test: /\.(jpg|png|jpeg)$/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}