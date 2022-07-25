const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge")
const commonConfig = require('./webpack.common.js')

const devConfig = {
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
};

module.exports = merge(commonConfig,devConfig)

