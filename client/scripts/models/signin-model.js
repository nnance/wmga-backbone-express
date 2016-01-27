define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  /* eslint-disable no-unused-vars */
  var bbValidation = require('backbone.validation');
  /* eslint-enable no-unused-vars */

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
