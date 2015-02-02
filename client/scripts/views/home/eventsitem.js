define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');
  var HomeEventsitemView = BaseView.extend({
    template: JST['client/templates/home/eventsitem.ejs'],
  });

  return HomeEventsitemView;
});
