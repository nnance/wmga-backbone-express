define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');

  return BaseView.extend({
    template: JST['client/templates/events/index.jst'],

    initialize: function(options) {
      this.indexView = options.view;
      this.addSubView({
        view: this.indexView,
        selector: '#index'
      });
    }
  });
});
