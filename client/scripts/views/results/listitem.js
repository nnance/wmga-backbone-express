define(function(require) {
  'use strict';

  var ListItemBaseView = require('client/scripts/views/listitembase');

  var ResultsListitemView = ListItemBaseView.extend({
    template: JST['client/templates/results/listitem.jst'],
  });

  return ResultsListitemView;
});
