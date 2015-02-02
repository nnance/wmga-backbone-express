define(function(require) {
    'use strict';

    var ListItemBaseView = require('client/scripts/views/listitembase');

    var UsersListitemView = ListItemBaseView.extend({
        template: JST['client/templates/users/listitem.ejs'],
        tagName: 'tr'
    });

    return UsersListitemView;
});
