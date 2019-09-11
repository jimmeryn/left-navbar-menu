const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", "css"],
    modules: ["node_modules"]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: "/node_modules/",
        use: "babel-loader"
      },
      {
        test: /\.css?$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      filename: "index.html"
    })
  ]
};
