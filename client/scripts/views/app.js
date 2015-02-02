/*global define*/

define([
  'client/scripts/views/viewbase',
  'client/scripts/routes/router',
  'client/scripts/routes/news',
  'client/scripts/routes/events',
  'client/scripts/routes/results',
  'client/scripts/routes/users',
  'client/scripts/routes/teams',
  'client/scripts/routes/signup',
  'client/scripts/datamanager',
  'client/scripts/collections/sessions',
  'client/scripts/views/app/header',
  'client/scripts/views/app/footer',
  ], function (BaseView, Router, NewsRouter, EventsRouter, ResultsRouter, UserRouter, TeamRouter, SignUpRouter, DataManager, SessionCollection, HeaderView, FooterView) {
    'use strict';

    var AppView = BaseView.extend({
      initialize: function() {
        this.sessionCollection = new SessionCollection();

        this.header = new HeaderView({collection: this.sessionCollection});
        this.container = new BaseView({className: 'container'});
        this.footer = new FooterView();

        this.listenTo(Backbone.history,'route',this.updateTracking);
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

      },

      updateTracking: function(router, route, params) {
        // ga('send','pageview','/', window.location.hash);
      }
    });

    return AppView;
  });
