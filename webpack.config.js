var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var env = process.env.NODE_ENV || 'development';

var resolveBower = function(module) {
  return path.join(__dirname, 'client/bower_components/', module);
};

var globalsPlugin = new webpack.ProvidePlugin({
  _: 'underscore',
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery'
});

var defaults = {
  devtool: 'source-map',
  entry: [
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    globalsPlugin,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {test: /\.scss$/, loaders: ['style', 'css', 'autoprefixer', 'sass']},
      {test: /\.ejs$/, loader: 'ejs'},
      {test: /\.jsx$/, loader: 'babel', include: path.join(__dirname, 'client')},
      {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
      {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
      {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff2'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    root: path.resolve('.'),
    alias: {
      'bootstrap': resolveBower('bootstrap-sass-official/assets/javascripts/bootstrap'),
      'bootstrap-filestyle': resolveBower('bootstrap-filestyle/src/bootstrap-filestyle'),
      'bootstrap-datetimepicker': resolveBower('bootstrap3-datetimepicker/src/js/bootstrap-datetimepicker'),
      'select2': resolveBower('select2/select2')
    },
    extensions: ['', '.js', '.jsx', '.json']
  }
};

var envConfig = {};

if (env === 'development') {
  envConfig = {
    devtool: 'eval',
    entry: [
      'webpack-hot-middleware/client?reload=true',
      './client/index'
    ],
    plugins: [
      globalsPlugin,
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  };
}

module.exports = _.merge(defaults, envConfig);
