define(function(require) {
  'use strict';

  var _ = require('underscore');
  var BaseView = require('client/scripts/views/viewbase');

  return BaseView.extend({
    template: require('client/templates/home/eventsitem.ejs'),

    serializeData: function() {
      return _.extend(this.model.toJSON(), {
        startdate: this.getDisplayDate('startdate')
      });
    }
  });
});
