define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');

  var HomeEventsitemView = BaseView.extend({
    template: JST['client/templates/home/eventsitem.jst'],

    serializeData: function() {
      return _.extend(this.model.toJSON(), {
          startdate: this.getDisplayDate('startdate')
      });
    }
  });

  return HomeEventsitemView;
});
