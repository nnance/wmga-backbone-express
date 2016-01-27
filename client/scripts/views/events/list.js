define(function(require) {

  //TODO add the add button template to the main list template

  'use strict';

  var Backbone = require('backbone');
  var moment = require('moment');
  var ListBaseView = require('client/scripts/views/listbase');
  var ItemView = require('client/scripts/views/events/listitem');

  return ListBaseView.extend({
    template: require('client/templates/events/list.ejs'),
    addButtonTemplate: require('client/templates/events/addbutton.ejs'),

    events: {
      'click #filter': 'switchFilter'
    },

    initialize: function(options) {

      var filterValues = {
        all: {
          name: 'all',
          start: moment().add(1,'years'),
          end: moment().subtract(1,'years')
        },
        upcoming: {
          name: 'upcoming',
          start: moment().add(15, 'days'),
          end: moment()
        },
        past: {
          name: 'past',
          start: moment().subtract(1,'days'),
          end: moment().subtract(2,'years')
        }
      };
      if (options && options.filter) {
        this.filter = filterValues[options.filter];
      } else {
        this.filter = filterValues.all;
      }

      ListBaseView.prototype.initialize.apply(this,arguments);
    },

    onRender: function() {
      ListBaseView.prototype.onRender.apply(this, arguments);
      this.$('#' + this.filter.name).button('toggle');
    },

    renderItem: function(model) {
      var startDate = this.getAsDate('startdate', model);
      if (startDate.isBefore(this.filter.start) && startDate.isAfter(this.filter.end)) {
        this.addSubView({
          view: new ItemView({model: model}),
          selector: '.eventList'
        });
      }
    },

    switchFilter: function(e) {
      Backbone.history.navigate('#events/filter/' + e.target.id, true);
    }

  });
});
