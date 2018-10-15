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
  module: {
    rules: [
      {
        test: /\.(woff2?|ttf|eot|jpe?g|png|svg|gif)$/,
        use: ["file-loader?name=[name].[hash:8].[ext]"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      TARGET: JSON.stringify("browser"),
    }),
  ],
};

module.exports = merge(baseConfig, config);
