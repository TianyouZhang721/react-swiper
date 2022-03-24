/*
 * @Author: Anthony Zhang
 * @Date: 2022-03-15 16:38:29
 * @LastEditTime: 2022-03-17 14:46:12
 * @LastEditors: Please set LastEditors
 * @FilePath: \驾照识别\scripts\webpack.base.config.js
 */
const resolve = require('resolve');
const webpackConfigBase = {
    // module此处为loader区域，一般文件内容解析，处理放在此处，如babel,less,postcss等
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", '@babel/preset-react']
                    }
                }
                
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        // options: {
                        //     ident: 'postcss',
                        //     plugins: (loader) => [
                        //         require('autoprefixer')()
                        //     ]
                        // }
                    }
                ]
            }
        ]
    }
}


module.exports = webpackConfigBase