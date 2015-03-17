define(function(require) {
  'use strict';

  var FormBaseView = require('client/scripts/views/formbase');

  return FormBaseView.extend({
    template: JST['client/templates/users/form.jst'],

    events: {
      'click #save-button': 'saveButton',
      'click #cancel-button': 'cancelButton',
    },

    onRender: function() {
      this.$('#birthdatepicker').datetimepicker({
        format: 'MM/DD/YYYY'
      });
      this.filestyle({
        selector: '#picture',
        binding: 'picture',
        classButton: 'btn btn-default'
      });
    },

    serializeData: function() {
      return _.extend(this.model.toJSON(), {
        itemdate: this.getDateAttr('birthdate'),
        isNew: this.model.isNew()
      });
    },

    routeSuccessfulResult: function() {
      Backbone.history.navigate('#users', true);
    }
  });
});
