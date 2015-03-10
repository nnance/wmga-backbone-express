define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');

  return BaseView.extend({

    initialize: function(options) {
      if (this.model) {
        this.listenTo(this.model, 'change', this.render);
      }
    },
  });
});
