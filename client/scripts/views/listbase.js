define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');

  return BaseView.extend({

    initialize: function(options) {
      this.dataManager = options.dataManager;
      this.listenTo(this.collection, 'reset,sort', this.renderList);
      this.listenTo(this.collection, 'add', this.renderItem);

      this.renderList();
    },

    onRender: function() {
      if (this.addButtonTemplate && this.session && this.session.get('admin')) {
        var inputGroup = this.$('.input-group');
        var btnGroup = this.$('.btn-group');
        if (inputGroup.length > 0) {
          inputGroup.append(this.addButtonTemplate(this));
        } else {
          btnGroup.after(this.addButtonTemplate(this));
        }
      }
    },

    renderList: function() {
      this.removeSubViews();
      this.collection.forEach(this.renderItem, this);
    },

    renderItem: function(model) {
      // must be provided by subclasses
    },

  });
});
