const path = require('path');

module.exports = {

  entry: [
    './index.js',
  ],

  output: {
    filename: 'popup.js',
    path: path.join(__dirname, '../public'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json'],
    modulesDirectories: ['node_modules']  
  },


  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }

}