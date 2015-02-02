define([
  'client/scripts/models/users-model',
  'client/scripts/views/signup/index',
  'client/scripts/views/signup/typestep',
  'client/scripts/views/signup/emailstep',
  'client/scripts/views/signup/passwordstep',
  'client/scripts/views/signup/createstep',
  'client/scripts/views/signup/paynowstep',
  'client/scripts/views/signup/paynowcreatedstep',
  ], function (UserModel, IndexView, TypeStepView, EmailStepView, PasswordStepView, CreateStepView, PayNowStepView, PayNowCreatedView) {
    'use strict';

    var SignupRouter = Backbone.Router.extend({
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
            this.container.setView(this.indexView.render());
          }
          var view = new ViewType({model: this.model, collection: this.collection, session: this.session, dataManager: this.dataManager});
          this.indexView.removeSubViews();
          this.indexView.insertView(view.render(),'#stepContent');
        }
      },
    });

    return SignupRouter;
  });
