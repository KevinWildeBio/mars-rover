var HtmlWebpackPlugin = require('html-webpack-plugin');
var package = require('./package.json');
var path = require("path");

module.exports = {
  entry: {
    app: "./index.js"
  }, 
  output: {
    path: path.join(__dirname, "../dist/"),
    filename: "[name].bundle.js",
  },
  watch:true,
  resolve: { extensions: [".js"] },
  devServer: {
    contentBase: path.join(__dirname, "../dist/"),
    port: 3000
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'manifest',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Hello World',
      template: './index.html',
      path: path.join(__dirname, "../dist/"),
      filename: 'index.html' 
    })
  ]
}