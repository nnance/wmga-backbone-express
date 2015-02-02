define(function(require) {
  'use strict';

  var FormBaseView = require('client/scripts/views/formbase');
  var UsersFormView = FormBaseView.extend({
    template: JST['client/templates/users/form.jst'],

    events: {
      'click #save-button': 'saveButton',
      'click #cancel-button': 'cancelButton',
    },

    render: function() {
      FormBaseView.prototype.render.apply(this,arguments);

      this.$('#birthdatepicker').datetimepicker();
      this.filestyle({
        selector: '#picture',
        binding: 'picture',
        classButton: 'btn btn-default'
      });
      return this;
    },

    routeSuccessfulResult: function() {
      Backbone.history.navigate('#users', true);
    }
  });

  return UsersFormView;
});
