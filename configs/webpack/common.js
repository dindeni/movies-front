const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './core/index.tsx',
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      // aliases
      core: path.resolve(__dirname, '../../src/core'),
      features: path.resolve(__dirname, '../../src/features'),
      shared: path.resolve(__dirname, '../../src/shared'),
      styles: path.resolve(__dirname, '../../src/styles'),
      services: path.resolve(__dirname, '../../src/services'),
      static: path.resolve(__dirname, '../../src/static'),
    },
  },
  context: path.resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'core/index.html' }),
    new ProvidePlugin({
      React: 'react',
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};
