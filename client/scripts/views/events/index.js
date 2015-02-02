define(function(require) {
  'use strict';

    var BaseView = require('client/scripts/views/viewbase');
    var EventsIndexView = BaseView.extend({
        template: JST['client/templates/events/index.ejs'],

        initialize: function(options) {
            this.indexView = options.view;
        },

        render: function() {
            BaseView.prototype.render.apply(this,arguments);
            this.insertView(this.indexView.render(), '#index');
            return this;
        }
    });

    return EventsIndexView;
});
