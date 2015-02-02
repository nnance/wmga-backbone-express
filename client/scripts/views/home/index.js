define(function(require) {
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
      var recentArticle = this.newsCollection.at(0);
      if (recentArticle) {
        var newsView = new NewsItemView({model: recentArticle});
        this.insertView(newsView.render(), '#news-item');
      }
    },

    renderEvent: function() {
      var recentEvent = this.eventsCollection.at(0);
      var now = moment();
      this.eventsCollection.forEach(function(event) {
        if (event.getAsDate('startdate').isAfter(now)) {
          recentEvent = event;
        }
      }, this);
      if (recentEvent) {
        var eventsView = new EventsItemView({model: recentEvent});
        this.insertView(eventsView.render(), '#events-item');
      }
    }
  });

  return HomeIndexView;
});
