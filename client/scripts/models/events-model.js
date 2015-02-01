define(function(require) {
  'use strict';

  var AppSettings = require('../appsettings');

  var EventsModel = Backbone.Model.extend({

    idAttribute: '_id',

    dateFormat: AppSettings.dateFormat,

    urlRoot: '/rest/events',

    validation: {
      title: {
        required: true
      },
      description: {
        required: true
      },
      startdate: {
        required: true
      }
    },

    defaults: function() {
      return {
        startdate:  this.now(),
        enddate: this.now()
      };
    }

  });

  return EventsModel;
});
