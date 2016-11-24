var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'src', 'index.js');

var config = {

  // We change to normal source mapping
  devtool: 'source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: [nodeModulesPath]
    },{
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      }
    }),
    // optimizations
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};


module.exports = config;
