define(function(require) {
    'use strict';

    var BaseRouter = require('client/scripts/routes/routerbase');
    var ListView = require('client/scripts/views/events/list');
    var ReviewView = require('client/scripts/views/events/review');
    var FormView = require('client/scripts/views/events/form');

    return BaseRouter.extend({
      routes: {
        'events': 'showList',
        'events/create': 'showAddForm',
        'events/read/:id': 'showReview',
        'events/update/:id': 'showEditForm',
        'events/filter/:value': 'showList'
      },
      listView: ListView,
      reviewView: ReviewView,
      formView: FormView
    });
  });
