const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const commConfig = require('./webpack.comm.config.js');
const { merge } = require('webpack-merge');

module.exports = merge(commConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/.DS_Store',
              '**/index.html'
            ]
          }
        }
      ]
    }),
  ]
})