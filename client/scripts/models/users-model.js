define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var AppSettings = require('../appsettings');

  var UsersModel = Backbone.Model.extend({

    idAttribute: '_id',

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

    defaults: {
      firstname: '',
      lastname: '',
      address: '',
      address2: '',
      phone: '',
      altphone: '',
      email: '',
      birthdate: '',
      paid: false,
      admin: false,
      treasure: false
    },

    getFullName: function() {
      return this.get('lastname') + ', ' + this.get('firstname');
    }

  });

  return UsersModel;
});
