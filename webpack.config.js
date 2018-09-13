const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: __dirname + "/src",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  }
};
