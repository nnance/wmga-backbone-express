define(function(require) {
  'use strict';

  var moment = require('moment');
  var ListBaseView = require('client/scripts/views/listbase');
  var ItemView = require('client/scripts/views/teams/listitem');

  return ListBaseView.extend({
    template: JST['client/templates/teams/list.jst'],
    addButtonTemplate: JST['client/templates/teams/addbutton.jst'],

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

    renderItem: function(model, index) {
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
