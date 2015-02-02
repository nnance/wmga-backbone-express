define([
  'client/scripts/routes/routerbase',
  'client/scripts/views/events/index',
  'client/scripts/views/events/list',
  'client/scripts/views/events/review',
  'client/scripts/views/events/form',
  ], function (BaseRouter, IndexView, ListView, ReviewView, FormView) {
    'use strict';

    var EventsRouter = BaseRouter.extend({
      routes: {
        'events': 'showList',
        'events/create': 'showAddForm',
        'events/read/:id': 'showReview',
        'events/update/:id': 'showEditForm',
        'events/filter/:value': 'showList'
      },
      indexView: IndexView,
      listView: ListView,
      reviewView: ReviewView,
      formView: FormView
    });

    return EventsRouter;
  });
