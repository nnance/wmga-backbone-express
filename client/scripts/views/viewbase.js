define(function(require) {
    'use strict';

    var BaseView = Backbone.View.extend({
        constructor: function(attributes, options) {
            if (attributes && attributes.session) {
                this.session = attributes.session;
            }
            Backbone.View.prototype.constructor.apply(this,arguments);
        },

        render: function() {
            if (this.template) {
                this.$el.html( this.template( this ) );
            }
            return this;
        },

        getAttr: function(attribute) {
            if (this.model) {
                return this.model.get(attribute);
            }
        },

        getDateAttr: function(attribute) {
            if (this.model) {
                return this.model.dateAsString(attribute);
            }
        },

    });

    return BaseView;
});
