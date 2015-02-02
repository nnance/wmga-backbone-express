define(function(require) {
  'use strict';

  var FormBaseView = require('client/scripts/views/formbase');
  var RequestPassword = require('client/scripts/models/requestpsw-model');

  var TypeStepView = FormBaseView.extend({
    template: JST['client/templates/signup/typestep.ejs'],

    events: {
      'click .btn': 'nextStep'
    },

    nextStep: function(e) {
      e.preventDefault();
      this.model.set(this.serializeForm('form'));
      if (this.model.get('existingMember') === 'yes') {
        Backbone.history.navigate('#signup/email', true);
      } else {
        Backbone.history.navigate('#signup/create', true);
      }
    }

  });

  return TypeStepView;
});
