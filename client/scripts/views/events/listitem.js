define(function(require) {
  'use strict';

  var _ = require('underscore');
  var ListItemBaseView = require('client/scripts/views/listitembase');

  return ListItemBaseView.extend({
    template: require('client/templates/events/listitem.ejs'),

    serializeData: function() {
      return _.extend(this.model.toJSON(), {
        startdate: this.getDisplayDate('startdate')
      });
    }
  });
});
