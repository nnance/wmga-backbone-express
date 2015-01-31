define(function() {
  'use strict';

  var IndexView = Backbone.View.extend({

    el: '#app-wrapper',

    template: JST['client/templates/index.jst'],

    events: {},

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(this.template);
      return this;
    }

  });

  return IndexView;
});
