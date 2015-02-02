define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');
  var ListitemBaseView = BaseView.extend({

    initialize: function(options) {
      BaseView.prototype.initialize.apply(this,arguments);
      if (this.model) {
        this.listenTo(this.model, 'change', this.render);
      }
    },
  });

  return ListitemBaseView;
});
