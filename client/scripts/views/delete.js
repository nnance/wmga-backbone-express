define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var BaseView = require('client/scripts/views/viewbase');
  var AlertView = require('client/scripts/views/alert');

  return BaseView.extend({
    className: 'modal fade',

    template: require('client/templates/delete.ejs'),

    events: {
      'click #delete-confirm': 'deleteConfirmed',
      'hidden.bs.modal': 'remove'
    },

    initialize: function(options) {
      if (!options || !options.modelAttr || !options.modelTypeName) {
        throw new Error('Missing required modelAttr or modelTypeName option');
      }

      this.modelAttr = options.modelAttr;
      this.modelTypeName = options.modelTypeName;
      this.successRoute = options.successRoute;

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
      this.$el.on('hidden.bs.modal', function() {
        if (this.successRoute) {
          Backbone.history.navigate(this.successRoute, true);
        }
      }.bind(this));
      this.$el.modal('hide');
    },

    deleteFailed: function(xhr) {
      this.addSubView({
        view: new AlertView({errors: {response: xhr.responseText}})
      });
    }
  });
});
