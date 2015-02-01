define(function(require) {
  'use strict';

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
