define(function(require) {
    'use strict';

    var AppSettings = require('client/scripts/appsettings');
    var BaseView = require('client/scripts/views/viewbase');
    var ReviewBaseView = BaseView.extend({

        initialize: function(options) {
            BaseView.prototype.initialize.apply(this,arguments);
            if (this.model) {
                this.listenTo(this.model,'change',this.render);
            }

        },

        render: function() {
            BaseView.prototype.render.apply(this, arguments);
            if (this.editButtonsTemplate && this.session && this.session.get('admin')) {
                this.$('.btn-toolbar').append(this.editButtonsTemplate(this));
            }
            return this;
        },

        getFileUrl: function() {
            return AppSettings.fileURL + this.model.get('attachedfile');
        },

    });

    return ReviewBaseView;
});
