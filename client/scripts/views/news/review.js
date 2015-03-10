define(function(require) {
  //TODO fix action options without using delegateEvents

  'use strict';

  var ReviewBaseView = require('client/scripts/views/reviewbase');
  var DeleteView = require('client/scripts/views/delete');

  return ReviewBaseView.extend({
    template: JST['client/templates/news/review.jst'],
    events: {
      'click #delete-btn': 'showDeleteConfirm',
    },

    onRender: function() {
      this.delegateEvents();
    },

    serializeData: function() {
      return _.extend(this.model.toJSON(), {
        itemdate: this.getDisplayDate('itemdate'),
        fileUrl: this.getFileUrl()
      });
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
});
