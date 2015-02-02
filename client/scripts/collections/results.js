define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var ResultsModel = require('client/scripts/models/results-model');

  var Results = Backbone.Collection.extend({

    url: '/rest/results',

    model: ResultsModel,

    comparator: function (a, b) {
      return a.get('itemdate') > b.get('itemdate') ? -1 : 1;
    }

  });

  return Results;
});
