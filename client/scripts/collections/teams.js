define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var TeamsModel = require('client/scripts/models/teams-model');

  var Teams = Backbone.Collection.extend({

    url: '/rest/teams',

    model: TeamsModel,

    comparator: function (a) {
      return a.get('name');
    }

  });

  return Teams;
});
