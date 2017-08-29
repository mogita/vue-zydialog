'use strict'

let path = require('path')
let webpack = require('webpack')

const common = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader?presets[]=es2015'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      }
    ]
  }
}

module.exports = Object.assign({}, common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-zydialog.min.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
})
