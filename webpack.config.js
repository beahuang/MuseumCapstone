const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'www/js'),
  dist: path.join(__dirname, 'www/dist'),
};

module.exports = {
  entry: PATHS.app,
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
      },
      {
        test: /\.svg$/,
        loader: 'react-svg-loader'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.woff$|\.ttf$/,
        loader: 'file-loader'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("index.css")
  ]
};
