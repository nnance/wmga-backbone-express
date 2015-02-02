define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');
  var HeaderView = BaseView.extend({
    attributes: {
      class: 'navbar navbar-inverse navbar-fixed-top',
      role: 'navigation'
    },

    template: JST['client/templates/app/header.ejs'],
    userTemplate: JST['client/templates/app/header-user.ejs'],
    signedInTemplate: JST['client/templates/app/header-user-signed.ejs'],

    initialize: function(options) {
      BaseView.prototype.initialize.apply(this,arguments);

      this.listenToOnce(this.collection, 'sync', this.loadCompleted);
      this.listenTo(Backbone.history, 'route', this.highlighItem);
    },

    loadCompleted: function() {
      this.model = this.collection.at(0);
      this.listenTo(this.model, 'signedin', this.render);
      this.listenTo(this.model, 'signedout', this.render);
      this.render();
    },

    render: function() {
      BaseView.prototype.render.apply(this,arguments);
      if (this.model && this.model.get('signedin')) {
        this.$('.navbar-collapse').append(this.signedInTemplate( this ));
      } else {
        this.$('#nav-users').hide();
        this.$('#nav-teams').hide();
        this.$('.navbar-collapse').append(this.userTemplate( this ));
      }
      this.highlighItem();
      return this;
    },

    highlighItem: function(router, route, params) {
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
    }

  });

  return HeaderView;
});
