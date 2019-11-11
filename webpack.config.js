const path = require('path')
const webpack = require('webpack')

const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    mode: 'none',
    target: 'web',
    entry: path.join(__dirname, 'client/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]--img.[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin(),
        new VueLoaderPlugin() //new一个实例
    ]
}

if(isDev){
    config.devtool = '#cheap-module-eval-source-map'

    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        // open: true,
        hot: true
    }

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
} else {
  config.entry = {    //优化：单独打包
      app: path.join(__dirname, 'src/index.js'),
      vendor: ['vue']
  }
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push({
      test: /\.styl/,
      use: [
          'css-loader',
          {
              loader: 'postcss-loader',
              options: {
                  //用于解决url()路径解析错误
                  url:false,
                  minimize:true,
                  sourceMap: true
              }
          },
          'stylus-loader'
      ]
  })

}

module.exports = config
