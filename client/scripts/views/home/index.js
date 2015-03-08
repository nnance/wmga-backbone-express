define(function(require) {
  // TODO add sticker headers for news and events on home page

  'use strict';

  var moment = require('moment');
  var BaseView = require('client/scripts/views/viewbase');
  var EventsItemView = require('client/scripts/views/home/eventsitem');
  var NewsItemView = require('client/scripts/views/home/newsitem');

  var HomeIndexView = BaseView.extend({

    template: JST['client/templates/home/index.jst'],

    initialize: function(options) {
      this.newsCollection = options.newsCol;
      this.eventsCollection = options.eventsCol;
      this.showSignUp = options.showSignUp;

      this.listenTo(this.newsCollection, 'sync', this.renderNews);
      this.listenTo(this.eventsCollection, 'sync', this.renderEvent);
    },

    render: function() {
      BaseView.prototype.render.apply(this,arguments);
      this.renderNews();
      this.renderEvent();
      return this;
    },

    renderNews: function() {
      for (var i = 0; i < 3; i++) {
        var recentArticle = this.newsCollection.at(i);
        if (recentArticle) {
          this.addSubView({
            view: new NewsItemView({model: recentArticle}),
            selector: '#news-item'
          });
        }
      }
    },

    renderEvent: function() {
      var recentEvent;
      var count = 0;
      var now = moment();
      this.eventsCollection.forEach(function(event) {
        if (event.getAsDate('startdate').isAfter(now)) {
          recentEvent = event;
        }
        if (recentEvent && (count < 3)) {
          this.addSubView({
            view: new EventsItemView({model: recentEvent}),
            selector: '#events-item'
          });
          count++;
        }
      }, this);
    }
  });

  return HomeIndexView;
});
