define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var AppSettings = require('../appsettings');
  var moment = require('moment');

  var ResultsModel = Backbone.Model.extend({
    idAttribute: '_id',

    dateFormat: AppSettings.dateFormat,

    urlRoot: '/rest/results',

    validation: {
      title: {
        required: true
      },
      text: {
        required: true
      }
    },

    defaults: function() {
      return {
        itemdate:  moment()
      };
    }

  });

  return ResultsModel;
});
