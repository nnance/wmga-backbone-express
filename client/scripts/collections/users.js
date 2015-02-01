define(function(require) {
  'use strict';

  var UsersModel = require('client/scripts/models/users-model');

  var Users = Backbone.Collection.extend({

    url: '/rest/users',

    model: UsersModel,

    comparator: function (a) {
      return a.getFullName().toLowerCase();
    }
  });

  return Users;
});
