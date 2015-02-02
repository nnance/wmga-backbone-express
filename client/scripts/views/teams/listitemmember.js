define(function(require) {
  'use strict';

  var ListItemBaseView = require('client/scripts/views/listitembase');

  var TeamsListitemMemberView = ListItemBaseView.extend({
    template: JST['client/templates/teams/listitemmember.ejs'],
    tagName: 'tr',

    renderMembers: function() {
      var result = '';

      _.each(this.model.get('members'), function(id, index){
        var member = this.collection.get(id);
        if (_.isObject(member)) {
          var name = member.get('firstname') + ' ' + member.get('lastname');
          if (index === 0) {
            result = name;
          } else {
            result = result + ', ' + name;
          }
        }
      }.bind(this), this);

      return result;
    },
  });


  return TeamsListitemMemberView;
});
