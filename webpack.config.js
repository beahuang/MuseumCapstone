const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'www/js'),
  dist: path.join(__dirname, 'www/dist'),
};

module.exports = {
  entry: PATHS.app,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
        loader: 'file-loader'
      },
    ]
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
};
