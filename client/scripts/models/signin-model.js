define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var AppSettings = require('../appsettings');

  var SigninModel = Backbone.Model.extend({

    idAttribute: '_id',

    urlRoot: '/rest/signin',

    validation: {
      email: {
        required: true,
        pattern: 'email'
      },
      password: {
        required: true
      }
    }

  });

  return SigninModel;
});
