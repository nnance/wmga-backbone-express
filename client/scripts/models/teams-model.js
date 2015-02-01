define(function(require) {
  'use strict';

  var AppSettings = require('../appsettings');

  var TeamsModel = Backbone.Model.extend({

    idAttribute: '_id',

    dateFormat: AppSettings.dateFormat,

    urlRoot: '/rest/teams',

    validation: {
      name: {
        required: true
      },

      teetime: {
        required: true
      }
    }

  });

  return TeamsModel;
});
