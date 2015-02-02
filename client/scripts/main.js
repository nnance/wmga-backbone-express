'use strict';

// RequireJS configuration
require.config({
  deps: [
    'backbone.localstorage',
    'backbone.validation',
    'backbone.composer',
    'backbone.datetime',
    'backbone.filestyle'
  ],

  paths: {
    'client/scripts': '.',
    'jquery': '../bower_components/jquery/dist/jquery',
    'underscore': '../bower_components/underscore/underscore',
    'backbone': '../bower_components/backbone/backbone',
    'backbone.localstorage': '../bower_components/backbone.localstorage/backbone.localStorage',
    'backbone.validation': '../bower_components/backbone.validation/dist/backbone-validation-amd',
    'moment': '../bower_components/moment/moment',
    'bootstrap.datetimepicker': '../bower_components/bootstrap3-datetimepicker/src/js/bootstrap-datetimepicker',
    'bootstrap-filestyle': '../bower_components/bootstrap-filestyle/src/bootstrap-filestyle',
    'select2': '../bower_components/select2/select2',
    'backbone.composer': '../bower_components/backbone.composer/backbone.composer',
    'backbone.datetime': '../bower_components/backbone-plugins/modeldatetime/backbone.datetime',
    'backbone.filestyle': '../bower_components/backbone-plugins/filestyle/backbone.filestyle'
  }
});

define('init', function(require) {

  var App = require('client/scripts/views/app');
  var app = new App({el: '#app'});
  app.render();
  app.initSession();
});

// Initialize the application.
require(['init']);
