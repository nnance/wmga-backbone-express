define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');
  var AlertView = require('client/scripts/views/alert');

  var DeleteView = BaseView.extend({
    className: 'modal fade',

    template: JST['client/templates/delete.jst'],

    events: {
      'click #delete-confirm': 'deleteConfirmed',
      'hidden.bs.modal': 'remove'
    },

    initialize: function(options) {
      BaseView.prototype.initialize.apply(this,arguments);

      if (!options || !options.modelAttr || !options.modelTypeName) {
        throw new Error('Missing required modelAttr or modelTypeName option');
      }

      this.listenTo(this.model, 'sync', this.deleteCompleted);
      this.listenTo(this.model, 'error', this.deleteFailed);
    },

    show: function() {
      this.$el.modal('show');
    },

    deleteConfirmed: function() {
      this.removeSubViews();
      this.model.destroy({wait: true});
    },

    deleteCompleted: function() {
      var options = this.options;
      this.$el.on('hidden.bs.modal', function() {
        if (options.successRoute) {
          Backbone.history.navigate(options.successRoute, true);
        }
      });
      this.$el.modal('hide');
    },

    deleteFailed: function(xhr) {
      this.addSubView({
        view: new AlertView({errors: {response: xhr.responseText}})
      });
    }
  });

  return DeleteView;
});
