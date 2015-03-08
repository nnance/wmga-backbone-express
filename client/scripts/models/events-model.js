define(function(require) {
  'use strict';

  var AppSettings = require('../appsettings');
  var Backbone = require('backbone');

  var moment = require('moment');

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
        title: '',
        description: '',
        attachedfile: '',
        startdate:  moment(),
        enddate: moment()
      };
    }

  });

  return EventsModel;
});
