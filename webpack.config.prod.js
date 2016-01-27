var path = require('path');
var webpack = require('webpack');

var resolveBower = function(module) {
  return path.join(__dirname, 'client/bower_components/', module);
};

module.exports = {
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
    new webpack.ProvidePlugin({
      _: 'underscore',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
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
      'jquery': resolveBower('jquery/dist/jquery'),
      'underscore': resolveBower('underscore/underscore'),
      'backbone': resolveBower('backbone/backbone'),
      'bootstrap': resolveBower('bootstrap-sass-official/assets/javascripts/bootstrap'),
      'backbone.localstorage': resolveBower('backbone.localstorage/backbone.localStorage'),
      'backbone.validation': resolveBower('backbone.validation/dist/backbone-validation-amd'),
      'moment': resolveBower('moment/moment'),
      'bootstrap.datetimepicker': resolveBower('bootstrap3-datetimepicker/src/js/bootstrap-datetimepicker'),
      'bootstrap-filestyle': resolveBower('bootstrap-filestyle/src/bootstrap-filestyle'),
      'select2': resolveBower('select2/select2'),
      'backbone.composer': resolveBower('backbone.composer/backbone.composer')
    },
    extensions: ['', '.js', '.jsx', '.json']
  }
};
