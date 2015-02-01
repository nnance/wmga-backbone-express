/**
*   RequireJS Test Config
*/

'use strict';

var tests = [
  'backbone.localstorage',
  'backbone.viewmanager',
  'backbone.datetime',
  'backbone.filestyle'
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
    'backbone.validation': 'client/bower_components/backbone.validation/src/backbone-validation',
    'moment': 'client/bower_components/moment/moment',
    'bootstrap.datetimepicker': 'client/bower_components/bootstrap3-datetimepicker/src/js/bootstrap-datetimepicker',
    'bootstrap-filestyle': 'client/bower_components/bootstrap-filestyle/src/bootstrap-filestyle',
    'select2': 'client/bower_components/select2/select2',
    'backbone.viewmanager': 'client/bower_components/backbone-plugins/viewmanager/backbone.viewmanager',
    'backbone.datetime': 'client/bower_components/backbone-plugins/modeldatetime/backbone.datetime',
    'backbone.filestyle': 'client/bower_components/backbone-plugins/filestyle/backbone.filestyle'
  },

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
