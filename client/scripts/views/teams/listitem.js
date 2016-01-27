define(function(require) {
  'use strict';

  var _ = require('underscore');
  var ListItemBaseView = require('client/scripts/views/listitembase');

  function renderMembers(model, collection) {
    var result = '';

    _.each(model.get('members'), function(id, index){
      var member = collection.get(id);
      if (_.isObject(member)) {
        var name = member.get('firstname') + ' ' + member.get('lastname');
        if (index === 0) {
          result = name;
        } else {
          result = result + ', ' + name;
        }
      }
    });

    return result;
  }

  return ListItemBaseView.extend({
    template: require('client/templates/teams/listitem.ejs'),
    className: 'col-xs-12 col-sm-6',

    serializeData: function() {
      return _.extend(this.model.toJSON(), {
        createdate: this.getSimpleDisplayDate('createdate'),
        members: renderMembers(this.model, this.collection)
      });
    }
  });
});
