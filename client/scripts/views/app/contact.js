define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');
  return BaseView.extend({
    template: require('client/templates/app/contact.ejs')
  });
});
