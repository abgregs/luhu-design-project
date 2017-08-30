var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]},
      { test: /\.(jpe?g|png|gif|svg|xml|ico)$/i, use: 'file-loader' },
      { test: /\.(ttf|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: 'file-loader' }

    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};
