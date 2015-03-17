define(function(require) {
    'use strict';

    var BaseRouter = require('client/scripts/routes/routerbase');
    var ListView = require('client/scripts/views/news/list');
    var ReviewView = require('client/scripts/views/news/review');
    var FormView = require('client/scripts/views/news/form');

    return BaseRouter.extend({
      routes: {
        'news': 'showList',
        'news/create': 'showAddForm',
        'news/read/:id': 'showReview',
        'news/update/:id': 'showEditForm',
        'news/filter/:value': 'showList'
      },
      listView: ListView,
      reviewView: ReviewView,
      formView: FormView
    });
  });
