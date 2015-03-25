define(function(require) {
  'use strict';

  var FormBaseView = require('client/scripts/views/formbase');
  var EmailStepView = FormBaseView.extend({
    template: JST['client/templates/signup/emailstep.jst'],

    events: {
      'click .btn-primary': 'nextStep',
      'click .btn-default': 'createStep'
    },

    nextStep: function(e) {
      e.preventDefault();

      this.removeSubViews();
      var formData = this.serializeForm('form');
      this.model.set(formData);

      if (this.model.isValid('email')) {
        this.collection.fetch({data: formData,
          success: _.bind(this.nextStepSuccess,this),
          error: _.bind(this.nextStepError,this)
        });
      } else {
        this.model.validate();
      }
    },

    showErrors: function(errors) {
      FormBaseView.prototype.showErrors.call(this, _.pick(errors,'email'));
    },

    createStep: function(e) {
      e.preventDefault();
      Backbone.history.navigate('#signup/create', true);
    },

    nextStepSuccess: function(col, resp, opt) {
      if (col.length === 0) {
        this.showErrors({email: 'Email address not found.'});
        this.$('.hidden').removeClass('hidden');
      } else {
        Backbone.history.navigate('#signup/password', true);
      }

    },

    nextStepError: function(col, resp, opt) {
      this.showErrors(resp);
    }
  });

  return EmailStepView;
});
