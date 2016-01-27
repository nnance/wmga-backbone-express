define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  /* eslint-disable no-unused-vars */
  var bbValidation = require('backbone.validation');
  /* eslint-enable no-unused-vars */

  var RequestpswModel = Backbone.Model.extend({

    idAttribute: '_id',

    urlRoot: '/rest/users/requestpassword',

    validation: {
      email: {
        required: true,
        pattern: 'email'
      }
    }

  });

  return RequestpswModel;
});
