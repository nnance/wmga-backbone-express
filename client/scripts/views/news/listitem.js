define(function(require) {
    'use strict';

    var ListItemBaseView = require('client/scripts/views/listitembase');

    var NewsListitemView = ListItemBaseView.extend({
        template: JST['client/templates/news/listitem.ejs'],
    });

    return NewsListitemView;
});
