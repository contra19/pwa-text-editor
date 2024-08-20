const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.js',
    install: './src/js/install.js',
    //sw: './src-sw.js' // Add this line for the service worker
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Just Another Text Editor',
    }),
    new WebpackPwaManifest({
      fingerprints: false,
      name: 'Just Another Text Editor',
      short_name: 'J.A.T.E.',
      description: 'Takes notes with JavaScript syntax highlighting!',
      background_color: '#225ca3',
      theme_color: '#225ca3',
      start_url: '/',
      display: 'standalone',
      orientation: 'portrait',
      icons: [
        {
          src: path.resolve('src/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons'),
          purpose: 'any maskable',
        },
      ],
    }),
    new InjectManifest({
      swSrc: './src-sw.js', // Path to your source service worker
      swDest: 'service-worker.js', // The name of the output service worker file
      mode: 'development',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
