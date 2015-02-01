define(function(require) {
  'use strict';

  var NewsModel = require('client/scripts/models/news-model');

  var News = Backbone.Collection.extend({

    model: NewsModel,

    url: '/rest/articles',

    comparator: function (a, b) {
      return a.get('itemdate') > b.get('itemdate') ? -1 : 1;
    }
  });

  return News;
});
