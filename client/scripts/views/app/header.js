define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var BaseView = require('client/scripts/views/viewbase');

  return BaseView.extend({
    attributes: {
      class: 'navbar navbar-inverse navbar-fixed-top',
      role: 'navigation'
    },

    template: require('client/templates/app/header.ejs'),

    initialize: function() {
      BaseView.prototype.initialize.apply(this,arguments);

      this.listenToOnce(this.collection, 'sync', this.loadCompleted);
      this.listenTo(Backbone.history, 'route', this.highlighItem);
    },

    loadCompleted: function() {
      this.model = this.collection.at(0);
      this.listenTo(this.model, 'signedin', this.render);
      this.listenTo(this.model, 'signedout', this.render);
    },

    onRender: function() {
      if (this.model && this.model.get('signedin')) {
        this.$('#signed-in').show();
        this.$('#signed-out').hide();
      } else {
        this.$('#nav-users').hide();
        this.$('#nav-teams').hide();
        this.$('#signed-in').hide();
        this.$('#signed-out').show();
      }
      this.highlighItem();
    },

    serializeData: function() {
      return this.model ? this.model.toJSON() : {};
    },

    highlighItem: function() {
      this.$('.active').removeClass('active');

      var hash = (window.location.hash.length === 0) ? '#home' : window.location.hash;
      if (hash.indexOf('/') > 0) {
        hash = hash.split('/')[0];
      }

      var item = this.$('a[href="' + hash + '"]');
      if (item.parent().parent().hasClass('dropdown-menu')) {
        item = item.parent().parent();
      }
      item.parent().addClass('active');

      var navbar = this.$('.navbar-collapse');
      if (navbar && navbar.hasClass('in')) {
        this.$('.collapse').collapse('hide');
      }
    }

  });
});
