const webpack = require("webpack");
const path = require("path");
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
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            } // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  }
};
