const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './example/public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: path.resolve(__dirname, 'example/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'example/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
