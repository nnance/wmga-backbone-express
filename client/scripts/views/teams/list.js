define(function(require) {
  'use strict';

  var moment = require('moment');
  var ListBaseView = require('client/scripts/views/listbase');
  var ItemView = require('client/scripts/views/teams/listitem');
  var MemberView = require('client/scripts/views/teams/listitemmember');

  var TeamsListView = ListBaseView.extend({
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

    renderItem: function(model) {
      var view = new ItemView({model: model});
      this.insertView(view.render(),'table');
      this.renderMembers(model);
    },

    renderMembers: function(model) {
      var view = new MemberView({model: model, collection: this.dataManager.userCollection});
      this.insertView(view.render(),'table');
    },

    filterTeams: function(e) {
      var filter = e.target.value;
      this.renderList(filter);
    }

  });

  return TeamsListView;
});
