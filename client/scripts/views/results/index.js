define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');
  var ResultsIndexView = BaseView.extend({
    template: JST['client/templates/results/index.jst'],

    initialize: function(options) {
      BaseView.prototype.initialize.apply(this,arguments);
      this.indexView = options.view;
    },

    render: function() {
      BaseView.prototype.render.apply(this,arguments);
      this.addSubView({
        view: this.indexView,
        selector: '#index'
      });
      return this;
    }
  });

  return ResultsIndexView;
});
