/*
 * @Author: Anthony Zhang
 * @Date: 2022-03-15 16:43:33
 * @LastEditTime: 2022-03-17 16:03:53
 * @LastEditors: Please set LastEditors
 * @FilePath: \驾照识别\scripts\webpack.dev.config.js
 */
console.log(123)
const path = require('path')
const webpack = require('webpack')
const webpackConfigBase = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(HtmlWebpackPlugin)
const {
    merge
} = require('webpack-merge')

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const webpackConfigDev = {
    mode: 'development',
    entry: {
        app: [resolve('../src/index.js')]
    },
    output: {
        path: resolve('../dist'),
        filename: 'ocr.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'eval-source-map', // 原始源代码（行）
    // devServer: {
    //     contentBase: resolve('../dist'),
    //     hot: true,
    //     open: true,
    //     host: 'localhost',
    //     port: 8080
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('../public/index.html')
        }),
        // new webpack.NamedModulesPlugin(), // 热加载时直接返回更新文件名
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(webpackConfigBase, webpackConfigDev)