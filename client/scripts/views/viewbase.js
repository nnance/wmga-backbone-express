define(function(require) {
  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');
  var moment = require('moment');
  var AppSettings = require('../appsettings');

  return Backbone.View.extend({
    constructor: function(attributes, options) {
      if (attributes && attributes.session) {
        this.session = attributes.session;
      }
      Backbone.View.prototype.constructor.apply(this,arguments);
    },

    getAttr: function(attribute) {
      if (this.model) {
        return this.model.get(attribute);
      }
    },

    _getDateOnly: function(attribute) {
      var dateAttr = this.model.get(attribute);
      if (_.isString(dateAttr) && dateAttr.indexOf('T') !== -1) {
        dateAttr = dateAttr.split('T')[0];
      }
      return dateAttr;
    },

    getDateAttr: function(attribute) {
      if (this.model && this.model.get(attribute)) {
        return moment(this._getDateOnly(attribute)).format(AppSettings.dateFormat);
      }
    },

    getDisplayDate: function(attribute) {
      if (this.model && this.model.get(attribute)) {
        return moment(this._getDateOnly(attribute)).format(AppSettings.displayDateFormat);
      }
    }

  });
});
