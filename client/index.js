//////
//
// Main application that imports all core components, renders application shell
// and manages login and logout
//
//////

/* eslint-disable no-unused-vars */
var scss = require('./styles/main.scss');
var bootstrap = require('bootstrap');
var bbComposer = require('backbone.composer');
/* eslint-enable no-unused-vars */

var $ = require('jquery');
var App = require('./scripts/views/app');

$(function() {
  var app = new App({el: '#app'});

  app.render();
  app.initSession();
});
