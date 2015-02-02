define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');
  var ContactView = BaseView.extend({
    template: JST['client/templates/app/contact.ejs'],

    postRender: function() {
      this.$('#sidebar').affix({
        offset: {
          top: this.$('#sidebar').offset().top - 50
        }
      });
    }
  });

  return ContactView;
});
