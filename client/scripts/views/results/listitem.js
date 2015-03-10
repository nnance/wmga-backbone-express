define(function(require) {
  'use strict';

  var _ = require('underscore');
  var ListItemBaseView = require('client/scripts/views/listitembase');

  return ListItemBaseView.extend({
    template: JST['client/templates/results/listitem.jst'],

    serializeData: function() {
      return _.extend(this.model.toJSON(), {
          itemdate: this.getDisplayDate('itemdate')
      });
    }
  });
});
