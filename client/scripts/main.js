'use strict';

// RequireJS configuration
require.config({
  deps: [
    'client/scripts/views/app',
    'bootstrap',
    'bootstrap.datetimepicker',
    'backbone.localstorage',
    'backbone.validation',
    'backbone.datetime',
    'backbone.filestyle',
    'backbone.composer'
  ],

  paths: {
    'client/scripts': '.',
    'jquery': '../bower_components/jquery/dist/jquery',
    'underscore': '../bower_components/underscore/underscore',
    'backbone': '../bower_components/backbone/backbone',
    'bootstrap': '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
    'backbone.localstorage': '../bower_components/backbone.localstorage/backbone.localStorage',
    'backbone.validation': '../bower_components/backbone.validation/dist/backbone-validation-amd',
    'moment': '../bower_components/moment/moment',
    'bootstrap.datetimepicker': '../bower_components/bootstrap3-datetimepicker/src/js/bootstrap-datetimepicker',
    'bootstrap-filestyle': '../bower_components/bootstrap-filestyle/src/bootstrap-filestyle',
    'select2': '../bower_components/select2/select2',
    'backbone.composer': '../bower_components/backbone.composer/backbone.composer',
    'backbone.datetime': '../bower_components/backbone-plugins/modeldatetime/backbone.datetime',
    'backbone.filestyle': '../bower_components/backbone-plugins/filestyle/backbone.filestyle'
  },

  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'jquery'
    },
    'bootstrap.datetimepicker': {
      deps: ['bootstrap','moment']
    },
    'select2': {
      deps: ['jquery']
    },
    'bootstrap-filestyle': {
      deps: ['jquery']
    }
  },
  callback: function(App) {
    var app = new App({el: '#app'});
    app.render();
    app.initSession();
  }
});
