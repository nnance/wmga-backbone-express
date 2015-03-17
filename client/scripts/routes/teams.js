define(function(require) {
    'use strict';

    var BaseRouter = require('client/scripts/routes/routerbase');
    var ListView = require('client/scripts/views/teams/list');
    var ReviewView = require('client/scripts/views/teams/review');
    var FormView = require('client/scripts/views/teams/form');

    return BaseRouter.extend({
      routes: {
        'teams': 'showList',
        'teams/create(:return)': 'showAddForm',
        'teams/read/:id': 'showReview',
        'teams/update/:id': 'showEditForm',
      },
      listView: ListView,
      reviewView: ReviewView,
      formView: FormView
    });
  });
