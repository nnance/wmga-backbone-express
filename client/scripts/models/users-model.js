define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var AppSettings = require('../appsettings');

  var UsersModel = Backbone.Model.extend({

    idAttribute: '_id',

    dateFormat: AppSettings.dateFormat,

    urlRoot: '/rest/users',

    validation: {
      firstname: {
        required: true
      },
      lastname: {
        required: true
      },
      email: {
        required: true,
        pattern: 'email'
      },
    },

    registrationValidation: {
      password: {
        required: true
      },
    },

    getFullName: function() {
      return this.get('lastname') + ', ' + this.get('firstname');
    }

  });

  return UsersModel;
});
