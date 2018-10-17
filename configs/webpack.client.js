const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const baseConfig = require("./webpack.base");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const config = {
  entry: {
    client: ["@babel/polyfill", "./client/index.js"],
  },

  output: {
    filename: "[name].js",
    chunkFilename: "[name].[hash].js",
    publicPath: "/assets/",

    path: path.resolve("./public/assets"),
  },

  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      TARGET: JSON.stringify("browser"),
    }),
  ],
};

module.exports = merge(baseConfig, config);
