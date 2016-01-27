define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var SessionsModel = require('client/scripts/models/sessions-model');

  /* eslint-disable no-unused-vars */
  var LocalStorage = require('backbone.localstorage');
  /* eslint-enable no-unused-vars */

  var Sessions = Backbone.Collection.extend({

    model: SessionsModel,

    localStorage: new Backbone.LocalStorage('wmga')
  });

  return Sessions;
});
