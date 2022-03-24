/*
 * @Author: Anthony Zhang
 * @Date: 2022-03-15 16:50:34
 * @LastEditTime: 2022-03-16 17:00:28
 * @LastEditors: Please set LastEditors
 * @FilePath: \驾照识别\scripts\webpack.pord.config.js
 */

const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const webpackConfigBase = require('./webpack.base.config')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const webpackConfigProd = {
    mode: 'production',
    entry: {
        app: [resolve('../src/components/index.js')]
    },
    output: {
        filename: 'ocr.js',
        path: resolve('../dist'),
        libraryTarget: 'commonjs2'
    },
    devtool: 'source-map',
    optimization: {
        minimizer: [
            // 压缩js 
            new TerserJSPlugin({
                parallel: 4,
                terserOptions: {
                    compress: {
                        drop_console: true, // 删除所有的console语句
                    }
                }
            }),
            // 压缩css
            new OptimizeCssAssetsPlugin()
        ]
    },
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(), // 每次执行都清空一次dist文件夹
    ]
}


module.exports = merge(webpackConfigBase, webpackConfigProd)