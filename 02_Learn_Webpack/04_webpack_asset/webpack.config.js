const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
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
      // { 
      //   test: /\.(png|jpe?g|gif|svg)$/, 
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "img/[name]_[hash:6].[ext]",
      //       esModule: false,
      //     }
      //   },
      //   type: "javascript/auto"
      // },
      // { 
      //   test: /\.(png|jpe?g|gif|svg)$/, 
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       limit: 100 * 1024,
      //       name: "img/[name]_[hash:6].[ext]",
      //       esModule: false,
      //     }
      //   },
      //   type: "javascript/auto"
      // },
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
  }
}