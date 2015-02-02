define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');
  var AlertView = BaseView.extend({
    className: 'alert alert-danger alert-dismissable',

    template: JST['client/templates/alert.jst'],

    initialize: function(options) {
      BaseView.prototype.initialize.apply(this,arguments);
      this.errors = options.errors;
    }
  });

  return AlertView;
});
