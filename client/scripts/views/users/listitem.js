define(function(require) {
  'use strict';

  var _ = require('underscore');
  var ListItemBaseView = require('client/scripts/views/listitembase');

  return ListItemBaseView.extend({
    template: JST['client/templates/users/listitem.jst'],
    className: 'row',

    serializeData: function() {
      return _.extend(this.model.toJSON(), {
        fullName: this.model.getFullName()
      });
    }
  });
});
