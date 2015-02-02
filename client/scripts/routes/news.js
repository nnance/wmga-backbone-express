define([
  'client/scripts/routes/routerbase',
  'client/scripts/views/news/index',
  'client/scripts/views/news/list',
  'client/scripts/views/news/review',
  'client/scripts/views/news/form',
  ], function (BaseRouter, IndexView, ListView, ReviewView, FormView) {
    'use strict';

    var NewsRouter = BaseRouter.extend({
      routes: {
        'news': 'showList',
        'news/create': 'showAddForm',
        'news/read/:id': 'showReview',
        'news/update/:id': 'showEditForm',
        'news/filter/:value': 'showList'
      },
      indexView: IndexView,
      listView: ListView,
      reviewView: ReviewView,
      formView: FormView
    });

    return NewsRouter;
  });
