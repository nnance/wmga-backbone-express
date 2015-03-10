define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');

  return BaseView.extend({
    template: JST['client/templates/news/index.jst'],

    initialize: function(options) {
      this.indexView = options.view;
      BaseView.prototype.render.apply(this,arguments);
      this.addSubView({
        view: this.indexView,
        selector: '#index'
      });
      return this;
    }
  });
});
