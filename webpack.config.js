const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js/main.js",
  output: {
    filename: "mani.js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "index.html",
    }),
  ],
  // 扩展文件加载模块 - css模块加
  module: {
    // 由于可以加载多种文件，每种文件对应一种loader，所以是数组
    rules: [
      // 由于是多种文件，所以使用扩展名进行区分，再应用不同的loader
      {
        // 正则判断文件类型
        test: /\.css$/i,
        // 这种类型文件使用以下loader
        use: ["style-loader", "css-loader"],
      },
      {
        // 加载图片资料模板
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
};
