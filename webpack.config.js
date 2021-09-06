const webpack = require("webpack")
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./assets/js/script.js",
  output: {
    path: path.join(__dirname + "/dist"),
    filename: "main.bundle.js"
  },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
  new BundleAnalyzerPlugin({
      analyzerMode: "static", //outputs an report.html file into dist folder
  })
  ],
  mode: "development"
};