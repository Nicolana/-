const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  // 入口
  entry: path.resolve(__dirname, '../src/index.js'),
  // 出口
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("development")
    })
  ]
}
