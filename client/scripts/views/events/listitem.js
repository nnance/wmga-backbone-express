define(function(require) {
  'use strict';

  var _ = require('underscore');
  var moment = require('moment');
  var ListItemBaseView = require('client/scripts/views/listitembase');

  var EventsListitemView = ListItemBaseView.extend({
    template: JST['client/templates/events/listitem.jst'],

    serializeData: function() {
      return _.extend(this.model.toJSON(), {
          startdate: this.getDisplayDate('startdate')
      });
    }
  });

  return EventsListitemView;
});
