// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/Pagination.js',
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-bootstrap': 'react-bootstrap',
    'bootstrap': 'bootstrap',
    'react-hook-form': 'react-hook-form',
    'axios': 'axios'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
