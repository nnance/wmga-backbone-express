/**
*   RequireJS Test Config
*/

'use strict';

var tests = [
  'backbone.localstorage',
  'backbone.validation',
  'backbone.composer'
];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base',

  // ask Require.js to load these files (all our tests)
  deps: tests,

  paths: {
    'jquery': 'client/bower_components/jquery/dist/jquery',
    'underscore': 'client/bower_components/underscore/underscore',
    'backbone': 'client/bower_components/backbone/backbone',
    'backbone.localstorage': 'client/bower_components/backbone.localstorage/backbone.localStorage',
    'backbone.validation': 'client/bower_components/backbone.validation/dist/backbone-validation-amd',
    'moment': 'client/bower_components/moment/moment',
    'bootstrap.datetimepicker': 'client/bower_components/bootstrap3-datetimepicker/src/js/bootstrap-datetimepicker',
    'bootstrap-filestyle': 'client/bower_components/bootstrap-filestyle/src/bootstrap-filestyle',
    'select2': 'client/bower_components/select2/select2',
    'backbone.composer': 'client/bower_components/backbone.composer/backbone.composer'
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

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
