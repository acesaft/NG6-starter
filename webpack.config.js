var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {},
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate-loader!babel-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
      {
        test   : /\.css$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader']
      }, {
        test   : /\.(scss|sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader','resolve-url-loader', 'sass-loader?sourceMap']
      }
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
