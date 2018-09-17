const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
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
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Production"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
