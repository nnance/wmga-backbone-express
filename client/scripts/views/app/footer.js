define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');
  var FooterView = BaseView.extend({
    template: JST['client/templates/app/footer.jst'],
    className: 'container'
  });

  return FooterView;
});
