define(function(require) {
  'use strict';

  var AppSettings = require('../appsettings');

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
        itemdate:  this.now()
      };
    }

  });

  return ResultsModel;
});
