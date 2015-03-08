define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');

  var HomeNewsitemView = BaseView.extend({
    template: JST['client/templates/home/newsitem.jst'],

    serializeData: function() {
        return this.model.toJSON();
    }
  });

  return HomeNewsitemView;
});
