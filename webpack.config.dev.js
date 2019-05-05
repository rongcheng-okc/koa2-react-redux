const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: path.join(__dirname, "src/index.js")
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[chunkhash:5].bundle.js",
    chunkFilename: "[name].[chunkhash:5].chunk.js"
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "/dist",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: [
          "babel-loader",
        ]
      },
      {
        test: /(?<!\.module)\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      },
      {
        test: /\.module\.css$/,
        use: ["style-loader", "css-loader?modules&importLoaders&localIdentName=[name]__[local]-[hash:base64:7]"],
      },
      // {
      //   test: /(?<!\.module)\.scss$/,
      //   test: /\\.scss$/,
      //   use: [
      //     { loader: MiniCssExtractPlugin.loader },
      //     "sass-loader"
      //   ],
      // },
      // {
      //   test: /\.module\.scss$/,
      //   use: ["style-loader", "css-loader?modules&importLoaders&localIdentName=[name]__[local]-[hash:base64:7]", 'sass-loader'],
      // },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader?modules&importLoaders&localIdentName=[name]__[local]-[hash:base64:5]"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["url-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["url-loader"]
      }
    ]
  },
  resolve:{
    extensions:['.js','.jsx','.json', '.css', '.scss'] //表示这几种文件的后缀名可以省略，按照从前到后的方式来进行补全
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      title: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:5].css',
      chunkFilename: '[contenthash:5].css',
    })
  ]
};