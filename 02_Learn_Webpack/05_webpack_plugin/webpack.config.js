const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/bundle.js"
  },
  module: { 
    rules: [ 
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader", "postcss-loader"] 
      },
      { 
        test: /\.less$/, 
        use: ["style-loader", "css-loader", "less-loader"] 
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, 
        // type: "asset/resource"
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/, 
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        },
      },
    ] 
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack项目",
      template: "./public/index.html"
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
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
}