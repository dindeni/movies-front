const { merge } = require('webpack-merge');
const commonConfig = require('./common');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  devtool: 'cheap-module-source-map',
  plugins: [new ReactRefreshPlugin()],
});
