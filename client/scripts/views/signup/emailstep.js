define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var FormBaseView = require('client/scripts/views/formbase');
  var EmailStepView = FormBaseView.extend({
    template: require('client/templates/signup/emailstep.ejs'),

    events: {
      'click .btn-primary': 'nextStep',
      'click .btn-default': 'createStep',
      'keypress input': 'keypress'
    },

    nextStep: function(e) {
      e.preventDefault();

      this.model.set(this.serializeForm('form'));
      this.model.validate();

      if (this.model.isValid('email')) {
        this.collection.fetch({data: {email: this.model.get('email')}})
        .done(this.nextStepSuccess.bind(this))
        .fail(this.nextStepError.bind(this));
      }
    },

    keypress: function(e) {
      if (e.which == 13) {
        this.nextStep(e);
      }
    },

    createStep: function(e) {
      e.preventDefault();
      Backbone.history.navigate('#signup/create', true);
    },

    nextStepSuccess: function(col) {
      if (col.length === 0) {
        this.showErrors({email: 'Email address not found.'});
        this.$('.hidden').removeClass('hidden');
      } else {
        Backbone.history.navigate('#signup/password', true);
      }

    },

    nextStepError: function(col, resp) {
      this.showErrors(resp);
    }
  });

  return EmailStepView;
});
