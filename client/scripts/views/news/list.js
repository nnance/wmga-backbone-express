define(function(require) {
  'use strict';

  var moment = require('moment');
  var ListBaseView = require('client/scripts/views/listbase');
  var ItemView = require('client/scripts/views/news/listitem');

  var NewsListView = ListBaseView.extend({
    template: JST['client/templates/news/list.jst'],
    addButtonTemplate: JST['client/templates/news/addbutton.jst'],

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
      // this.$('#' + this.filter.name).button('toggle');
      return this;
    },

    renderItem: function(model) {
      if (model.getAsDate('itemdate').isBefore(this.filter.start) && model.getAsDate('itemdate').isAfter(this.filter.end)) {
        this.addSubView({
          view: new ItemView({model: model}),
          selector: '.container'
        });
      }
    },

    switchFilter: function(e) {
      Backbone.history.navigate('#news/filter/' + e.target.id, true);
    }
  });

  return NewsListView;
});
