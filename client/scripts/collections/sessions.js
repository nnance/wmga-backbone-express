define(function(require) {
  'use strict';

  var SessionsModel = require('client/scripts/models/sessions-model');

  var Sessions = Backbone.Collection.extend({

    model: SessionsModel,

    localStorage: new Backbone.LocalStorage('wmga')
  });

  return Sessions;
});
