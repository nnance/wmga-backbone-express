define(function(require) {
  'use strict';

  var BaseView = require('client/scripts/views/viewbase');
  var AppSettings = require('client/scripts/appsettings');

  var PayNowStep = BaseView.extend({
    template: JST['client/templates/signup/paynowstep.jst'],

    events: {
      'click .btn-primary': 'nextStep',
      'click .btn-default': 'skipStep'
    },

    nextStep: function(e) {
      e.preventDefault();
      window.location.href = AppSettings.membershipPayNow + this.model.get('email');
    },

    skipStep: function(e) {
      e.preventDefault();
      Backbone.history.navigate('#membership', true);
    },
  });

  return PayNowStep;
});
