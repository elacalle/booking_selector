const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  output: {
    filename: '[hash].js'
  },
  module: {
    rules: [
      // eslint-disable-next-line no-useless-escape
      { test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: 'file-loader' },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.html$/, use: 'html-loader' }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'template.html'
    }),
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default'],
      moment : 'moment'
    }),
    new CleanWebpackPlugin()
  ]
}