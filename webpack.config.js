const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/_bundle/main.js",
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist", "_bundle"),
    filename: "main.bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};
