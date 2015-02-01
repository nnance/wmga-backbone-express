define(function(require) {
  'use strict';

  var AppSettings = '../appsettings';

  var NewsModel = Backbone.Model.extend({

    idAttribute: '_id',

    dateFormat: AppSettings.dateFormat,

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
        itemdate:  this.now()
      };
    }

  });

  return NewsModel;
});
