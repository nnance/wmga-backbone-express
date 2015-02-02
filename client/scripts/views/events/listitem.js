define(function(require) {
  'use strict';

  var ListItemBaseView = require('client/scripts/views/listitembase');
  var EventsListitemView = ListItemBaseView.extend({
    template: JST['client/templates/events/listitem.jst'],
  });

  return EventsListitemView;
});
