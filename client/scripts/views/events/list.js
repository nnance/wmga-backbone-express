define(function(require) {
    'use strict';

    var moment = require('moment');
    var ListBaseView = require('client/scripts/views/listbase');
    var ItemView = require('client/scripts/views/events/listitem');

    var EventsListView = ListBaseView.extend({
        template: JST['client/templates/events/list.ejs'],
        addButtonTemplate: JST['client/templates/events/addbutton.ejs'],

        events: {
            'click #filter': 'switchFilter'
        },

        initialize: function(options) {
            ListBaseView.prototype.initialize.apply(this,arguments);

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
        },

        render: function() {
            ListBaseView.prototype.render.apply(this, arguments);
            this.$('#' + this.filter.name).button('toggle');
            return this;
        },

        renderItem: function(model) {
            if (model.getAsDate('startdate').isBefore(this.filter.start) && model.getAsDate('startdate').isAfter(this.filter.end)) {
                var view = new ItemView({model: model});
                this.insertView(view.render(),'.container');
            }
        },

        switchFilter: function(e) {
            Backbone.history.navigate('#events/filter/' + e.target.id, true);
        }

    });

    return EventsListView;
});
