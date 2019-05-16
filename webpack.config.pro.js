const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    main: path.join(__dirname, "src/index.js")
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[chunkhash:5].bundle.js",
    chunkFilename: "[name].[chunkhash:5].chunk.js"
  },
  devtool: "cheap-module-source-map",
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
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader?modules&importLoaders&localIdentName=[name]__[local]-[hash:base64:5]"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 6000
        }
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
    }),
    new CleanWebpackPlugin(),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/service-worker.js',
      swDest: 'service-worker.js',
    }),
  ]
};
