/***
  Author: Daniel Okwufulueze
  Date: 13/02/2016
*/

const path = require('path');

module.exports = [
  {
    entry: {
      'demo': './demo/js/demo.js'
    },
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          exclude: path.join(__dirname, 'node_modules'),
          loader: 'jshint'
        }
      ],
      loaders: [
        {
          test: /\.js$/,
          exclude: path.join(__dirname, 'node_modules'),
          loader: 'babel-loader',
          query: {
            presets: [
              'es2015'
            ]
          }
        },
        {
          test: /\.css$|\.scss$/,
          exclude: path.join(__dirname, 'node_modules'),
          loader: 'style!css?url=false!postcss!sass'
        }
      ]
    },
    output: {
      path: './demo/js/bundle/',
      filename: '[name].js'
    },
    resolve: {
      extensions: ['', '.css', '.js', '.scss'],
      path: __dirname,
      exclude: path.join(__dirname, 'node_modules')
    },
    jshint: {
      esversion: 6
    }
  }
];
