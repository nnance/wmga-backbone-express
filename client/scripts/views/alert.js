define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');

  return BaseView.extend({
    className: 'alert alert-danger alert-dismissable',

    template: JST['client/templates/alert.jst'],

    initialize: function(options) {
      this.errors = options.errors;
    }
  });
});
