define(function(require) {
  'use strict';

  var ReviewBaseView = require('client/scripts/views/reviewbase');
  var DeleteView = require('client/scripts/views/delete');

  var NewsDetailView = ReviewBaseView.extend({
        template: JST['client/templates/news/review.ejs'],
        editButtonsTemplate: JST['client/templates/news/editbuttons.ejs'],

        events: {
            'click #delete-btn': 'showDeleteConfirm',
        },

        showDeleteConfirm: function() {
            var view = new DeleteView({
                model: this.model,
                modelAttr: 'title',
                modelTypeName: 'news article',
                successRoute: '#news'
            });
            this.$el.append(view.render().el);
            view.show();
        }
    });

    return NewsDetailView;
});
