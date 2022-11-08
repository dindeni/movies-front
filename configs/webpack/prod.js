const { merge } = require('webpack-merge');
const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const commonConfig = require('./common');
const path = require('path');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'js/bundle.[contenthash].min.js',
    path: resolve(__dirname, '../../build/'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  performance: {
    maxAssetSize: 300000,
    maxEntrypointSize: 300000,
    assetFilter: function (assetFilename) {
      return !/(?<=\.)(png|jpg|ico|woff|woff2)/g.test(assetFilename);
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../../public'),
          to: path.resolve('build'),
        },
      ],
    }),
  ],
  devtool: 'source-map',
});
