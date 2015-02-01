'use strict';

// RequireJS configuration
require.config({
  deps: [
    'backbone.localstorage',
    'backbone.viewmanager',
    'backbone.datetime',
    'backbone.filestyle'
  ],

  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'underscore': '../bower_components/underscore/underscore',
    'backbone': '../bower_components/backbone/backbone',
    'backbone.localstorage': 'client/bower_components/backbone.localstorage/backbone.localStorage',
    'backbone.validation': '../bower_components/backbone.validation/src/backbone-validation',
    'moment': '../bower_components/moment/moment',
    'bootstrap.datetimepicker': '../bower_components/bootstrap3-datetimepicker/src/js/bootstrap-datetimepicker',
    'bootstrap-filestyle': '../bower_components/bootstrap-filestyle/src/bootstrap-filestyle',
    'select2': '../bower_components/select2/select2',
    'backbone.viewmanager': '../bower_components/backbone-plugins/viewmanager/backbone.viewmanager',
    'backbone.datetime': '../bower_components/backbone-plugins/modeldatetime/backbone.datetime',
    'backbone.filestyle': '../bower_components/backbone-plugins/filestyle/backbone.filestyle'
  }
});

define('init', function(require) {


  var router = require('./routes');

  // Use GET and POST to support all browsers
  // Also adds '_method' parameter with correct HTTP headers
  Backbone.emulateHTTP = true;
  // Enable pushState for compatible browsers
  var enablePushState = true;

  // Detect is pushState is available
  var pushState = !!(enablePushState && window.history && window.history.pushState);

  if (pushState) {
    // Start listening to route changes with pushState
    Backbone.history.start({ pushState: true, root: '/' });
  } else {
    // Start listening to route changes without pushState
    Backbone.history.start();
  }

  // Handle pushState for incompatible browsers (IE9 and below)
  if (!pushState && window.location.pathname !== '/') {
    window.location.replace('/#' + window.location.pathname);
  }

  // Set up global click event handler to use pushState for links
  // use 'data-bypass' attribute on anchors to allow normal link behavior
  $(document).on('click', 'a:not([data-bypass])', function(event) {

    var href = $(this).attr('href');
    var protocol = this.protocol + '//';

    if (href.slice(protocol.length) !== protocol) {
      event.preventDefault();
      router.navigate(href, true);
    }

  });

  console.log('Welcome to Yeogurt');
});

// Initialize the application.
require(['init']);
