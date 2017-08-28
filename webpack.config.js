let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')

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

// for dev
module.exports = Object.assign({}, common, {
  entry: './src/demo/main.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'main.js'
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/demo/index.html'
    })
  ]
})

// for building
if (process.env.NODE_ENV === 'production') {
  module.exports = [
    Object.assign({}, common, {
      name: 'dist',
      entry: './src/lib',
      output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'vue-zydialog.min.js',
        library: ['vue-zydialog'],
        libraryTarget: 'umd'
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),

        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
      ]
    }),
    Object.assign({}, common, {
      name: 'docs',
      entry: './src/demo/main.js',
      output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.js'
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),

        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/demo/index.html'
        }),

        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
      ]
    })
  ]
}
