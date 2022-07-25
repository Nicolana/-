const path = require("path");
const webpack = require("webpack");
const commonConfig = require('./webpack.common.js')
const {merge} = require('webpack-merge')

const prodConfig = {
  mode: 'production',
  // 入口
  entry: path.resolve(__dirname, '../src/index.js'),
  // 出口
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("production")
    })
  ]
};

module.exports = merge(commonConfig, prodConfig)

