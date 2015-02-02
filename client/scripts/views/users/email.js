define(function(require) {
  'use strict';

  var FormBaseView = require('client/scripts/views/formbase');
  var EmailFormView = FormBaseView.extend({
    template: JST['client/templates/users/email.jst'],

    events: {
      'click #save-button': 'saveButton',
      'click #cancel-button': 'cancelButton',
    },

    routeSuccessfulResult: function() {
      Backbone.history.navigate('#users', true);
    }
  });

  return EmailFormView;
});
