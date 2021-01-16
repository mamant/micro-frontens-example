const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const pachageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'invoicing',
      filename: 'remoteEntry.js',
      exposes: {
        './InvoicingApp': './src/bootstrap'
      },
      //  shared: ['react', 'react-dom']
      shared: pachageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
