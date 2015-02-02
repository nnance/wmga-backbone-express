define(function(require) {
    'use strict';

    var ListItemBaseView = require('client/scripts/views/listitembase');

    var TeamsListitemView = ListItemBaseView.extend({
        template: JST['client/templates/teams/listitem.ejs'],
        tagName: 'tr'
    });

    return TeamsListitemView;
});
