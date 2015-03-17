define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var moment = require('moment');

  var TeamsModel = Backbone.Model.extend({

    idAttribute: '_id',

    urlRoot: '/rest/teams',

    validation: {
      name: {
        required: true
      },

      teetime: {
        required: true
      }
    },

    defaults: {
      name: '',
      paid: false,
      datecreated: moment(),
      comments: ''
    }

  });

  return TeamsModel;
});
