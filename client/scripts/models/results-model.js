define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var moment = require('moment');
  /* eslint-disable no-unused-vars */
  var bbValidation = require('backbone.validation');
  /* eslint-enable no-unused-vars */

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
