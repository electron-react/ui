import webpack from 'webpack'
import WebpackNotifierPlugin from 'webpack-notifier'
import config from './config'

export default {
  devtool: 'eval',
  entry: {
    main: [
      'webpack-hot-middleware/client',
      config.entry,
    ],
  },
  cache: true,
  output: {
    path: config.outputPath,
    filename: 'index.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          { loader: 'babel-loader', query: { presets: ['react-hmre'], cacheDirectory: true, highlightCode: false } },
        ],
      },
      { test: /\.json/, loader: 'json-loader' },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
    ],
  },
  resolve: {
    alias: {
      docs: config.aliasDocs,
      ui: config.aliasUi,
    },
    extensions: ['.json', '.js'],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ title: 'UI Lib' }),
  ],
}
