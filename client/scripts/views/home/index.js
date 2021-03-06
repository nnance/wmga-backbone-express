define(function(require) {
  // TODO add sticker headers for news and events on home page

  'use strict';

  var moment = require('moment');
  var BaseView = require('client/scripts/views/viewbase');
  var EventsItemView = require('client/scripts/views/home/eventsitem');
  var NewsItemView = require('client/scripts/views/home/newsitem');

  return BaseView.extend({

    template: require('client/templates/home/index.ejs'),

    initialize: function(options) {
      this.newsCollection = options.newsCol;
      this.eventsCollection = options.eventsCol;
      this.showSignUp = options.showSignUp;

      this.listenTo(this.newsCollection, 'sync', this.renderNews);
      this.listenTo(this.eventsCollection, 'sync', this.renderEvent);

      this.renderNews();
      this.renderEvents();
    },

    renderNews: function() {
      for (var i = 0; i < 3 && i < this.newsCollection.length; i++) {
        var recentArticle = this.newsCollection.at(i);
        if (recentArticle) {
          this.addSubView({
            view: new NewsItemView({model: recentArticle}),
            selector: '#news-item'
          });
        }
      }
    },

    renderEvents: function() {
      var upcoming = {
        start: moment().add(15, 'days'),
        end: moment()
      };

      var filter = this.eventsCollection.filter(function(event){
        var startDate = this.getAsDate('startdate', event);
        return (startDate.isBefore(upcoming.start) && startDate.isAfter(upcoming.end));
      }, this);

      for (var i = 0; i < 3 && i < filter.length; i++) {
        var recentEvent = filter[i];
        this.addSubView({
          view: new EventsItemView({model: recentEvent}),
          selector: '#events-item'
        });
      }
    }
  });
});
