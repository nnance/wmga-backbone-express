define(function(require) {
  'use strict';

  var Backbone = require('backbone');

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
