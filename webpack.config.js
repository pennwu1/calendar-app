const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const devPlugins = [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()];
const prodPlugins = [...devPlugins, new UglifyJSPlugin({
  sourceMap: true
})];
const pluginsConfig = isProd ? prodPlugins : devPlugins;

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './app/index.js'
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './static',
    hot: true
  },
  plugins: pluginsConfig,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, "app"),
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react'],
          plugins: ['react-hot-loader/babel']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};