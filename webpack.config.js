const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',

  output: {
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\/node_modules\/(?!@elastic\/)/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            'babel-preset-env',
            'babel-preset-react'
          ],
          plugins: [
            'transform-async-generator-functions',
            'transform-object-rest-spread',
            'transform-class-properties',
            'pegjs-inline-precompile',
            [
              'inline-react-svg',
              {
                ignorePattern: 'images/*',
                svgo: {
                  'plugins': [
                    { cleanupIDs: false },
                    { removeViewBox: false },
                  ]
                }
              }
            ]
          ]
        }
      },

      {
        test: /\.s?css$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'devserver'),
    port: 8040,
    hot: true
  },

  watch: true
};