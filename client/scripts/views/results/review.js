define(function(require) {
  'use strict';

  var _ = require('underscore');
  var ReviewBaseView = require('client/scripts/views/reviewbase');
  var DeleteView = require('client/scripts/views/delete');

  return ReviewBaseView.extend({
    template: require('client/templates/results/review.ejs'),
    events: {
      'click #delete-btn': 'showDeleteConfirm'
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
        modelTypeName: 'tournament results',
        successRoute: '#results'
      });
      this.$el.append(view.render().el);
      view.show();
    }
  });
});
