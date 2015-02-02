define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');
  var ListBaseView = BaseView.extend({

    initialize: function(options) {
      this.dataManager = options.dataManager;
      this.listenTo(this.collection, 'reset,sort', this.renderList);
      this.listenTo(this.collection, 'add', this.renderItem);
    },

    render: function() {
      BaseView.prototype.render.apply(this,arguments);
      if (this.addButtonTemplate && this.session && this.session.get('admin')) {
        var inputGroup = this.$('.input-group');
        var btnGroup = this.$('.btn-group');
        if (inputGroup.length > 0) {
          inputGroup.append(this.addButtonTemplate(this));
        } else {
          btnGroup.after(this.addButtonTemplate(this));
        }
      }
      this.renderList();
      return this;
    },

    renderList: function() {
      this.removeSubViews();
      this.collection.forEach(this.renderItem, this);
    },

    renderItem: function(model) {
      // must be provided by subclasses
    },

  });

  return ListBaseView;
});
