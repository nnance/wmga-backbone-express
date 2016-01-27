define(function(require) {
  'use strict';

  var _ = require('underscore');
  var ReviewBaseView = require('client/scripts/views/reviewbase');
  var DeleteView = require('client/scripts/views/delete');

  return ReviewBaseView.extend({
    template: require('client/templates/events/review.ejs'),
    events: {
      'click #delete-btn': 'showDeleteConfirm'
    },

    serializeData: function() {
      return _.extend(this.model.toJSON(), {
        startdate: this.getDisplayDate('startdate'),
        fileUrl: this.getFileUrl()
      });
    },

    showDeleteConfirm: function() {
      var view = new DeleteView({
        model: this.model,
        modelAttr: 'title',
        modelTypeName: 'event',
        successRoute: '#events'
      });
      this.$el.append(view.render().el);
      view.show();
    }
  });
});
