define(function(require) {
  'use strict';

  var ReviewBaseView = require('client/scripts/views/reviewbase');
  var DeleteView = require('client/scripts/views/delete');

  var EventsDetailView = ReviewBaseView.extend({
    template: JST['client/templates/events/review.jst'],
    events: {
      'click #delete-btn': 'showDeleteConfirm',
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

  return EventsDetailView;
});
