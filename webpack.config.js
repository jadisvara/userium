var webpack = require('webpack');
var path = require('path');
var outputPath = path.join(__dirname, '/dist');
var buildPath = path.resolve(__dirname, 'public', 'build');
var appPath = path.join(__dirname, 'src');

module.exports = {
  entry: [
    // For hot style updates
   'webpack/hot/dev-server',

    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:8080',

    './src/index'
  ],
  output: {
    path: buildPath,
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  plugins: [
    // We have to manually add the Hot Replacement plugin when running
   // from Node
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
