define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');
  return BaseView.extend({
    template: JST['client/templates/app/contact.jst'],
  });
});
