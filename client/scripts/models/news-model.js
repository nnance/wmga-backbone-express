define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var AppSettings = '../appsettings';
  var moment = require('moment');

  var NewsModel = Backbone.Model.extend({

    idAttribute: '_id',

    urlRoot: '/rest/articles',

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
        itemdate: moment()
      };
    }

  });

  return NewsModel;
});
