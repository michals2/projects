const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: "./build",
    filename: "app.bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/typeahead.html",
    filename: "index.html"
  })]
};
