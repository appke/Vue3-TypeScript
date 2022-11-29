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
      { 
        test: /\.(png|jpe?g|gif|svg)$/, 
        use: {
          loader: "file-loader",
          options: {
            // outputPath: "img",
            name: "img/[name]_[hash:6].[ext]",
            esModule: false, //fileloader5.0以上 路径问题
          }
        },
        type: "javascript/auto" //url(..)会在build下生成一张错误图片
      },
    ] 
  }
}