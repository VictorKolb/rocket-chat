const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  target: "node",

  entry: {
    app: ["@babel/polyfill", "./server/index.js"],
  },

  output: {
    filename: "[name].js",
    path: path.resolve("./build"),
  },

  externals: [webpackNodeExternals()],
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
      TARGET: JSON.stringify("node"),
    }),
  ],
};

module.exports = merge(baseConfig, config);
