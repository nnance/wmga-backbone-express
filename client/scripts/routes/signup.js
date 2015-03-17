define(function(require) {
    'use strict';

    var UserModel = require('client/scripts/models/users-model');
    var IndexView = require('client/scripts/views/signup/index');
    var TypeStepView = require('client/scripts/views/signup/typestep');
    var EmailStepView = require('client/scripts/views/signup/emailstep');
    var PasswordStepView = require('client/scripts/views/signup/passwordstep');
    var CreateStepView = require('client/scripts/views/signup/createstep');
    var PayNowStepView = require('client/scripts/views/signup/paynowstep');
    var PayNowCreatedView = require('client/scripts/views/signup/paynowcreatedstep');

    return Backbone.Router.extend({
      routes: {
        'signup': 'showSignup',
        'signup/:step': 'showSignup',
      },

      initialize: function(options) {
        this.container = options.container;
        this.dataManager = options.dataManager;
        this.session = options.dataManager.session;
        this.collection = options.dataManager.userCollection;
        this.model = new UserModel();

        this.indexView = new IndexView();
        this.views = {
          welcome: TypeStepView,
          email: EmailStepView,
          password: PasswordStepView,
          create: CreateStepView,
          paynow: PayNowStepView,
          createpaynow: PayNowCreatedView
        };
      },

      showSignup: function(index) {
        var step = !index ? 'welcome' : index;
        var ViewType = this.views[step];

        if (step !== 'welcome' && !this.model.has('existingMember')) {
          Backbone.history.navigate('#signup', true);
        } else {
          if (step === 'welcome') {
            this.model = new UserModel();
            this.container.setView(this.indexView);
          }
          var view = new ViewType({model: this.model, collection: this.collection, session: this.session, dataManager: this.dataManager});
          this.indexView.removeSubViews();
          this.indexView.addSubView({
            view: view,
            selector: '#stepContent'
          });
        }
      },
    });
  });
