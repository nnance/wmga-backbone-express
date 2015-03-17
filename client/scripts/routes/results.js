define(function(require) {
    'use strict';

    var BaseRouter = require('client/scripts/routes/routerbase');
    var ListView = require('client/scripts/views/results/list');
    var ReviewView = require('client/scripts/views/results/review');
    var FormView = require('client/scripts/views/results/form');

    return BaseRouter.extend({
      routes: {
        'results': 'showList',
        'results/create': 'showAddForm',
        'results/read/:id': 'showReview',
        'results/update/:id': 'showEditForm',
        'results/filter/:value': 'showList'
      },
      listView: ListView,
      reviewView: ReviewView,
      formView: FormView
    });
  });
