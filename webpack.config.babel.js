import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";

module.exports = {

    entry: {
        index: './src/js/index.js'
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name].bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Index',
            template: path.resolve(__dirname, './src/index.html'),
            chunks: ['index']
        }),
        new CleanWebpackPlugin()
    ],

    mode: "development",

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 3000,
        open: true
    }
};
