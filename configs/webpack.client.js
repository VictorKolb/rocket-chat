const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const baseConfig = require("./webpack.base");

const config = {
  entry: {
    client: ["@babel/polyfill", "./client/index.js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./public/assets"),
  },
  // plugins: [new MiniCssExtractPlugin({ filename: "[name].css" })],

  plugins: [
    new webpack.DefinePlugin({
      TARGET: JSON.stringify("browser"),
    }),
  ],
};

module.exports = merge(baseConfig, config);
