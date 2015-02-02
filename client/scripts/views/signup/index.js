define(function(require) {
    'use strict';

    var BaseView = require('client/scripts/views/viewbase');
    var IndexView = BaseView.extend({
        template: JST['client/templates/signup/index.ejs']
    });

    return IndexView;
});
