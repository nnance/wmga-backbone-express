define(function(require) {
  'use strict';

  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var Events = require('client/scripts/collections/events');
  var News = require('client/scripts/collections/news');
  var Results = require('client/scripts/collections/results');
  var Users = require('client/scripts/collections/users');
  var Teams = require('client/scripts/collections/teams');

  var DataManager = function () {
    this.initialize.apply(this,arguments);
  };

  _.extend(DataManager.prototype, Backbone.Events, {
    initialize: function(options) {
      if (!options || !options.session) {
        throw new Error('missing session option');
      }
      this.session = options.session;

      this.eventsCollection = new Events();
      this.newsCollection = new News();
      this.resultsCollection = new Results();
      this.userCollection = new Users();
      this.teamCollection = new Teams();
    },

    loadData: function(callback) {
      var deferreds = [
        this.eventsCollection.fetch(),
        this.newsCollection.fetch(),
        this.resultsCollection.fetch()
      ];
      if (this.session.get('signedin')) {
        deferreds.push(this.userCollection.fetch());
        deferreds.push(this.teamCollection.fetch());
      }
      $.when.apply($,deferreds).done(callback);
      return deferreds;
    },

    loadSecureData: function(callback) {
      var deferreds = [
        this.userCollection.fetch(),
        this.teamCollection.fetch()
      ];
      $.when.apply($,deferreds).done(callback);
      return deferreds;
    }
  });

  return DataManager;
});
