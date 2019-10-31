/**
 * 实践
 */
const path = require('path')
const webpack = require('webpack')

const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }),
    new HTMLPlugin({
        template: path.join(__dirname, 'template.html')
    }),
    new VueLoaderPlugin() //new一个实例
]

const devServer = {
    port: 8080,
    host: '0.0.0.0',
    overlay: {
        errors: true
    },
    // open: true,
    hot: true
}

let config

config = merge(baseConfig, {
    // devtool: '@cheap-module-eval-source-map',
    entry: path.join(__dirname, '../practice/index.js'),
    module: {
        rules: [
            {
                test: /\.styl/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            }
        ]
    },
    devServer,
    //import Vue from vue
    resolve: {
        alias: {
            'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins: defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoEmitOnErrorsPlugin()
    ])
})

module.exports = config
