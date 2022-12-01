const path = require('path');
const { merge } = require('webpack-merge');
const commConfig = require("./webpack.comm.config");

module.exports = merge(commConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../public")
    },
    hot: true,
    port: 8088,
  },
})