define(function(require) {
  'use strict';

  var moment = require('moment');
  var ListBaseView = require('client/scripts/views/listbase');
  var ItemView = require('client/scripts/views/results/listitem');

  return ListBaseView.extend({
    template: JST['client/templates/results/list.jst'],
    addButtonTemplate: JST['client/templates/results/addbutton.jst'],

    events: {
      'click #filter': 'switchFilter'
    },

    initialize: function(options) {
      var filterValues = {
        all: {
          name: 'all',
          start: moment(),
          end: moment().subtract('years',1)
        },
        recent: {
          name: 'recent',
          start: moment(),
          end: moment().subtract('days', 5)
        },
        past: {
          name: 'past',
          start: moment().subtract('days',5),
          end: moment().subtract('years',2)
        }
      };
      if (options && options.filter) {
        this.filter = filterValues[options.filter];
      } else {
        this.filter = filterValues.all;
      }

      ListBaseView.prototype.initialize.apply(this, arguments);
    },

    onRender: function() {
      ListBaseView.prototype.onRender.apply(this, arguments);
      this.$('#' + this.filter.name).button('toggle');
    },

    renderItem: function(model) {
      var startDate = this.getAsDate('itemdate', model);
      if (startDate.isBefore(this.filter.start) && startDate.isAfter(this.filter.end)) {
        this.addSubView({
          view: new ItemView({model: model}),
          selector: '.eventList'
        });
      }
    },

    switchFilter: function(e) {
      Backbone.history.navigate('#results/filter/' + e.target.id, true);
    }
  });
});
