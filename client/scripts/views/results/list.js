define(function(require) {
  'use strict';

  var moment = require('moment');
  var ListBaseView = require('client/scripts/views/listbase');
  var ItemView = require('client/scripts/views/results/listitem');

  var ResultsListView = ListBaseView.extend({
    template: JST['client/templates/results/list.ejs'],
    addButtonTemplate: JST['client/templates/results/addbutton.ejs'],

    events: {
      'click #filter': 'switchFilter'
    },

    initialize: function(options) {
      ListBaseView.prototype.initialize.apply(this, arguments);

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
    },

    render: function() {
      ListBaseView.prototype.render.apply(this, arguments);
      this.$('#' + this.filter.name).button('toggle');
      return this;
    },

    renderItem: function(model) {
      if (model.getAsDate('itemdate').isBefore(this.filter.start) && model.getAsDate('itemdate').isAfter(this.filter.end)) {
        var view = new ItemView({model: model});
        this.insertView(view.render(),'.container');
      }
    },

    switchFilter: function(e) {
      Backbone.history.navigate('#results/filter/' + e.target.id, true);
    }
  });

  return ResultsListView;
});
