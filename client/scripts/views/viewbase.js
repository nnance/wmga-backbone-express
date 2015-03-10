define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var moment = require('moment');

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

    getDateAttr: function(attribute) {
      if (this.model) {
        return this.model.dateAsString(attribute);
      }
    },

    getDisplayDate: function(attribute) {
      if (this.model && this.model.get(attribute)) {
        var dateAttr = this.model.get(attribute).split('T')[0];
        return moment(dateAttr).format('dddd, MMMM Do YYYY');
      }
    }

  });
});
