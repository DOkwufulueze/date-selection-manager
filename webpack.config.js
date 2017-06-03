/***
  Author: Daniel Okwufulueze
  Date: 13/02/2016
*/

const path = require('path');
const LoaderOptionsPlugin = require('webpack').LoaderOptionsPlugin;

module.exports = {
  entry: {
    'demo': './demo/js/demo.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ 'es2015' ]
            }
          }
        ]
      },
      {
        test: /\.css$|\.scss$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'demo/js/bundle'),
    filename: '[name].js'
  },
  plugins: [
    new LoaderOptionsPlugin({
      options: {
        jshint: {
          esversion: 6
        }
      }
    })
  ],
  resolve: {
    extensions: ['.css', '.js', '.scss'],
    modules: [__dirname, 'node_modules']
  }
};
