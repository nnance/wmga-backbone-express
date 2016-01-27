define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  /* eslint-disable no-unused-vars */
  var bbValidation = require('backbone.validation');
  /* eslint-enable no-unused-vars */

  var EmailModel = Backbone.Model.extend({

    idAttribute: '_id',

    urlRoot: '/rest/users/email',

    validation: {
      subject: {
        required: true
      },
      body: {
        required: true
      }
    }

  });

  return EmailModel;
});
