define(function(require) {
  'use strict';

  var EventsModel = require('../models/events-model');

  var Events = Backbone.Collection.extend({

    model: EventsModel,

    url: '/rest/events',

    comparator: function (a, b) {
      return a.get('startdate') > b.get('startdate') ? -1 : 1;
    }

  });

  return Events;
});
