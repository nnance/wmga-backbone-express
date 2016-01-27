define(function(require) {
  'use strict';

  var _ = require('underscore');
  var ListBaseView = require('client/scripts/views/listbase');
  var ItemView = require('client/scripts/views/teams/listitem');

  return ListBaseView.extend({
    template: require('client/templates/teams/list.ejs'),
    addButtonTemplate: require('client/templates/teams/addbutton.ejs'),

    events: {
      'click #filter': 'switchFilter',
      'keyup input': 'filterTeams'
    },

    renderList: function(filter) {
      this.removeSubViews();
      _.each(this.collection.filter(function(team){
        if (filter) {
          return team.get('name').toLowerCase().indexOf(filter.toLowerCase()) > -1;
        } else {
          return true;
        }
      }), this.renderItem, this);
    },

    renderItem: function(model) {
      this.addSubView({
        view: new ItemView({model: model, collection: this.dataManager.userCollection}),
        selector: '#table'
      });
    },

    filterTeams: function(e) {
      var filter = e.target.value;
      this.renderList(filter);
    }

  });
});
