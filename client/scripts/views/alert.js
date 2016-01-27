define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');

  return BaseView.extend({
    className: 'alert alert-danger alert-dismissable',

    template: require('client/templates/alert.ejs'),

    initialize: function(options) {
      this.errors = options.errors;
    }
  });
});
