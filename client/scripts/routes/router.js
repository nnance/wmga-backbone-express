define(function(require) {
    'use strict';

    var SignInModel = require('client/scripts/models/signin-model');
    var HomeView = require('client/scripts/views/home/index');
    var SignInView = require('client/scripts/views/app/signin');
    var ContactView = require('client/scripts/views/app/contact');

    return Backbone.Router.extend({
      routes: {
        '': 'showHome',
        'home': 'showHome',
        'home/signup:value': 'showHome',
        'signin': 'showSignIn',
        'signout': 'signOutUser',
        'contact': 'showContact'
      },

      initialize: function(options) {
        this.container = options.container;
        this.session = options.dataManager.session;
        this.dataManager = options.dataManager;
        this.newsCollection = options.dataManager.newsCollection;
        this.eventsCollection = options.dataManager.eventsCollection;

        this.listenTo(this.session,'signedout',this.routeHome);
      },

      showHome: function(showSignUp) {
        var view = new HomeView({
          newsCol: this.newsCollection,
          eventsCol: this.eventsCollection,
          session: this.session,
          showSignUp: showSignUp
        });
        this.container.setView(view);
      },

      showSignIn: function() {
        var signIn = new SignInModel();
        var view = new SignInView({model: signIn, session: this.session, dataManager: this.dataManager});
        this.container.setView(view);
      },

      signOutUser: function() {
        this.session.signout();
      },

      showContact: function() {
        var view = new ContactView();
        this.container.setView(view);
      },

      routeHome: function() {
        Backbone.history.navigate('#home',true);
      }
    });
  });
