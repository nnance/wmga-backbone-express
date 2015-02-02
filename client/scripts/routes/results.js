define([
  'client/scripts/routes/routerbase',
  'client/scripts/views/results/index',
  'client/scripts/views/results/list',
  'client/scripts/views/results/review',
  'client/scripts/views/results/form',
  ], function (BaseRouter, IndexView, ListView, ReviewView, FormView) {
    'use strict';

    var ResultsRouter = BaseRouter.extend({
      routes: {
        'results': 'showList',
        'results/create': 'showAddForm',
        'results/read/:id': 'showReview',
        'results/update/:id': 'showEditForm',
        'results/filter/:value': 'showList'
      },
      indexView: IndexView,
      listView: ListView,
      reviewView: ReviewView,
      formView: FormView
    });

    return ResultsRouter;
  });
