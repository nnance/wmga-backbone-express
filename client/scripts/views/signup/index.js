define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');
  var IndexView = BaseView.extend({
    template: require('client/templates/signup/index.ejs')
  });

  return IndexView;
});
