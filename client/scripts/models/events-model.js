define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  /* eslint-disable no-unused-vars */
  var bbValidation = require('backbone.validation');
  /* eslint-enable no-unused-vars */

  var moment = require('moment');

  var EventsModel = Backbone.Model.extend({

    idAttribute: '_id',

    urlRoot: '/rest/events',

    comparator: 'startdate',

    validation: {
      title: {
        required: true
      },
      description: {
        required: true
      },
      startdate: {
        required: true
      }
    },

    defaults: function() {
      return {
        title: '',
        description: '',
        attachedfile: '',
        startdate:  moment(),
        enddate: moment()
      };
    }

  });

  return EventsModel;
});
