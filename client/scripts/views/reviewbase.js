define(function(require) {
  'use strict';

  var AppSettings = require('client/scripts/appsettings');
  var BaseView = require('client/scripts/views/viewbase');

  return BaseView.extend({

    initialize: function() {
      if (this.model) {
        this.listenTo(this.model,'change',this.render);
      }
    },

    onRender: function() {
      if (this.session && !this.session.get('admin')) {
        this.$('#action-menu').hide();
      }
    },

    getFileUrl: function() {
      return AppSettings.fileURL + this.model.get('attachedfile');
    }

  });
});
