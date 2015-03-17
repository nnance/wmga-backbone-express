define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var AppSettings = require('../appsettings');
  var moment = require('moment');

  var ResultsModel = Backbone.Model.extend({
    idAttribute: '_id',

    urlRoot: '/rest/results',

    validation: {
      title: {
        required: true
      },
      text: {
        required: true
      }
    },

    defaults: function() {
      return {
        title: '',
        text: '',
        attachedfile: '',
        itemdate:  moment()
      };
    }

  });

  return ResultsModel;
});
