define(function(require) {
  'use strict';

  var _ = require('underscore');
  var ReviewBaseView = require('client/scripts/views/reviewbase');
  var DeleteView = require('client/scripts/views/delete');
  var AppSettings = require('client/scripts/appsettings');

  return ReviewBaseView.extend({
    template: require('client/templates/teams/review.ejs'),

    events: {
      'click #delete-btn': 'showDeleteConfirm',
      'click #admin': 'setAdmin',
      'click #treasure': 'setTreasure',
      'click #team-btn': 'registerTeam'
    },

    initialize: function(options){
      ReviewBaseView.prototype.initialize.apply(this,arguments);
      this.userCollection = options.dataManager.userCollection;
    },

    onRender: function() {
      ReviewBaseView.prototype.onRender.apply(this, arguments);

      var isSignedUser = this.session.get('userid') === this.model.get('captainid');
      var isAdmin = this.session.get('admin');

      if (isAdmin || isSignedUser) {
        this.$('#action-menu').show();
      }

      if (this.model.get('paid') || !isSignedUser) {
        this.$('#team-unpaid').remove();
      } else {
        this.$('#team-paid').remove();
      }

      _.each(this.model.get('members'), function(memberid){
        var user = this.userCollection.get(memberid);
        if (user) {
          this.$('#team-table').append('<p>' + user.getFullName() + '</p>');
        }
      }, this);
      return this;
    },

    getFileUrl: function() {
      return AppSettings.fileURL + this.model.get('photo');
    },

    getPayNow: function() {
      return AppSettings.teamPayNow + this.model.id;
    },

    getCaptainName: function() {
      if (this.model.has('captainid')) {
        var user = this.userCollection.get(this.model.get('captainid'));
        return _.isObject(user) ? user.getFullName() : '';
      }
    },

    showDeleteConfirm: function() {
      var view = new DeleteView({
        model: this.model,
        modelAttr: 'name',
        modelTypeName: 'team',
        successRoute: '#teams'
      });
      this.$el.append(view.render().el);
      view.show();
    }
  });
});
