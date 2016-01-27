define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var FormBaseView = require('client/scripts/views/formbase');
  var EmailFormView = FormBaseView.extend({
    template: require('client/templates/users/email.ejs'),

    events: {
      'click #save-button': 'saveButton',
      'click #cancel-button': 'cancelButton'
    },

    routeSuccessfulResult: function() {
      Backbone.history.navigate('#users', true);
    }
  });

  return EmailFormView;
});
