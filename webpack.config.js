const path = require('path');

module.exports = [
  {
    entry: {
      'demo': './demo/js/demo.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: '/node_modules',
          loader: 'babel-loader'
        }
      ]
    },
    output: {
      path: './demo/js/bundle/',
      filename: '[name].js'
    }
  }
];
