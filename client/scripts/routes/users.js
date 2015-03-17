define(function(require) {
    'use strict';

    var BaseRouter = require('client/scripts/routes/routerbase');
    var EmailModel = require('client/scripts/models/email-model');
    var ListView = require('client/scripts/views/users/list');
    var ReviewView = require('client/scripts/views/users/review');
    var FormView = require('client/scripts/views/users/form');
    var EmailView = require('client/scripts/views/users/email');

    return BaseRouter.extend({
      routes: {
        'users': 'showList',
        'users/create': 'showAddForm',
        'users/read/:id': 'showReview',
        'users/update/:id': 'showEditForm',
        'membership': 'showMembership',
        'users/email': 'showEmailForm'
      },
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
  });
