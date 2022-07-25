const path = require("path")
const srcPath = path.join(__dirname,"..","src")

module.exports = {
    entry: path.join(srcPath,"index.js"),
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-proposal-nullish-coalescing-operator',
              ]
            }
          }
        }
      ]
    }
}
