define([
  'client/scripts/routes/routerbase',
  'client/scripts/models/email-model',
  'client/scripts/views/users/index',
  'client/scripts/views/users/list',
  'client/scripts/views/users/review',
  'client/scripts/views/users/form',
  'client/scripts/views/users/email',
  ], function (BaseRouter, EmailModel, IndexView, ListView, ReviewView, FormView, EmailView) {
    'use strict';

    var UsersRouter = BaseRouter.extend({
      routes: {
        'users': 'showList',
        'users/create': 'showAddForm',
        'users/read/:id': 'showReview',
        'users/update/:id': 'showEditForm',
        'membership': 'showMembership',
        'users/email': 'showEmailForm'
      },
      indexView: IndexView,
      listView: ListView,
      reviewView: ReviewView,
      formView: FormView,

      showMembership: function() {
        if (this.session.has('userid') && this.session.get('signedin')) {
          this.showReview(this.session.get('userid'));
        } else {
          Backbone.history.navigate('#home',true);
        }
      },

      showEmailForm: function() {
        var view = new EmailView({
          model: new EmailModel(),
          session: this.session,
          dataManager: this.dataManager
        });
        this.showView(view);
      },
    });

    return UsersRouter;
  });
