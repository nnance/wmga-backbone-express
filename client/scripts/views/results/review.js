define(function(require) {
  'use strict';

  var ReviewBaseView = require('client/scripts/views/reviewbase');
  var DeleteView = require('client/scripts/views/delete');

  var ResultsDetailView = ReviewBaseView.extend({
    template: JST['client/templates/results/review.jst'],
    editButtonsTemplate: JST['client/templates/results/editbuttons.jst'],

    events: {
      'click #delete-btn': 'showDeleteConfirm',
    },

    showDeleteConfirm: function() {
      var view = new DeleteView({
        model: this.model,
        modelAttr: 'title',
        modelTypeName: 'tournament results',
        successRoute: '#results'
      });
      this.$el.append(view.render().el);
      view.show();
    }
  });

  return ResultsDetailView;
});
