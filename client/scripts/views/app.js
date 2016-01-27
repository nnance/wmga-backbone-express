/* global define */
define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var _ = require('underscore');
  var BaseView = require('client/scripts/views/viewbase');
  var Router = require('client/scripts/routes/router');
  var NewsRouter = require('client/scripts/routes/news');
  var EventsRouter = require('client/scripts/routes/events');
  var ResultsRouter = require('client/scripts/routes/results');
  var UserRouter = require('client/scripts/routes/users');
  var TeamRouter = require('client/scripts/routes/teams');
  var SignUpRouter = require('client/scripts/routes/signup');
  var DataManager = require('client/scripts/datamanager');
  var SessionCollection = require('client/scripts/collections/sessions');
  var HeaderView = require('client/scripts/views/app/header');
  var FooterView = require('client/scripts/views/app/footer');

  return BaseView.extend({
    initialize: function() {
      this.sessionCollection = new SessionCollection();

      this.header = new HeaderView({collection: this.sessionCollection});
      this.container = new BaseView();
      this.footer = new FooterView();
    },

    render: function() {
      this.addSubView({view: this.header});
      this.addSubView({view: this.container});
      this.addSubView({view: this.footer});
    },

    initSession: function() {
      this.sessionCollection.fetch({
        success: _.bind(this.completeInit, this),
        error: _.bind(this.completeInit, this)
      });
    },

    completeInit: function() {
      if (this.sessionCollection.length === 0) {
        this.sessionCollection.create();
      }
      this.session = this.sessionCollection.at(0);

      this.dataManager = new DataManager({session: this.session});

      this.createRouters();

      if (this.session.get('signedin')) {
        this.listenToOnce(this.session,'signedin',this.initData);
        this.session.validateSession();
      } else {
        this.initData();
      }
    },

    initData: function() {
      this.dataManager.loadData(function() {
        Backbone.history.start();
      });
    },

    createRouters: function() {
      this.router = new Router({
        container: this.container,
        dataManager: this.dataManager
      });
      this.newsRouter = new NewsRouter({
        container: this.container,
        dataManager: this.dataManager,
        collection: this.dataManager.newsCollection
      });
      this.eventsRouter = new EventsRouter({
        container: this.container,
        dataManager: this.dataManager,
        collection: this.dataManager.eventsCollection
      });
      this.resultsRouter = new ResultsRouter({
        container: this.container,
        dataManager: this.dataManager,
        collection: this.dataManager.resultsCollection
      });
      this.teamRouter = new TeamRouter({
        container: this.container,
        dataManager: this.dataManager,
        collection: this.dataManager.teamCollection
      });
      this.userRouter = new UserRouter({
        container: this.container,
        dataManager: this.dataManager,
        collection: this.dataManager.userCollection
      });
      this.signupRouter = new SignUpRouter({
        container: this.container,
        dataManager: this.dataManager,
        collection: this.dataManager.userCollection
      });

    }
  });
});
