define(function(require) {
  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');
  var moment = require('moment');
  var AppSettings = require('../appsettings');

  function getDateOnly(model, attribute) {
    var dateAttr = model.get(attribute);
    if (_.isString(dateAttr) && dateAttr.indexOf('T') !== -1) {
      dateAttr = dateAttr.split('T')[0];
    }
    return dateAttr;
  }

  return Backbone.View.extend({
    constructor: function(attributes, options) {
      if (attributes && attributes.session) {
        this.session = attributes.session;
      }
      Backbone.View.prototype.constructor.apply(this,arguments);
    },

    getAttr: function(attribute, model) {
      if (!model) {
        model = this.model;
      }
      if (model) {
        return model.get(attribute);
      }
    },

    getDateAttr: function(attribute, model) {
      if (!model) {
        model = this.model;
      }

      if (model && model.get(attribute)) {
        return moment(getDateOnly(model, attribute)).format(AppSettings.dateFormat);
      }
    },

    getAsDate: function(attribute, model) {
      if (!model) {
        model = this.model;
      }

      return moment(model.get(attribute));
    },

    getDisplayDate: function(attribute, model) {
      if (!model) {
        model = this.model;
      }

      if (model && model.get(attribute)) {
        return moment(getDateOnly(model, attribute)).format(AppSettings.displayDateFormat);
      }
    },

    getSimpleDisplayDate: function(attribute, model) {
      if (!model) {
        model = this.model;
      }

      if (model && model.get(attribute)) {
        return moment(getDateOnly(model, attribute)).format(AppSettings.simpleDisplayDateFormat);
      }
    }

  });
});
