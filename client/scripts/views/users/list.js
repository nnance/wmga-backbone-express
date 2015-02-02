define(function(require) {
    'use strict';

    var moment = require('moment');
    var ListBaseView = require('client/scripts/views/listbase');
    var ItemView = require('client/scripts/views/users/listitem');

    var UsersListView = ListBaseView.extend({
        template: JST['client/templates/users/list.ejs'],
        addButtonTemplate: JST['client/templates/users/addbutton.ejs'],

        events: {
            'click #filter': 'switchFilter',
            'keyup input': 'filterUsers'
        },

        renderList: function(filter) {
            this.removeSubViews();
            _.each(this.collection.filter(function(user){
                if (filter) {
                    if (user.getFullName().toLowerCase().indexOf(filter.toLowerCase()) > -1) {
                        return true;
                    } else if (user.get('email').toLowerCase().indexOf(filter.toLowerCase()) > -1) {
                        return true;
                    }
                } else {
                    return true;
                }
            }), this.renderItem, this);
        },

        renderItem: function(model) {
            var view = new ItemView({model: model});
            this.insertView(view.render(),'table');
        },

        filterUsers: function(e) {
            var filter = e.target.value;
            this.renderList(filter);
        }

    });

    return UsersListView;
});
