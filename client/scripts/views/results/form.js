define(function(require) {
  'use strict';

  var FormBaseView = require('client/scripts/views/formbase');
  var ResultsFormView = FormBaseView.extend({
    template: JST['client/templates/results/form.jst'],

    events: {
      'click #save-button': 'saveButton',
      'click #cancel-button': 'cancelButton',
    },

    render: function() {
      FormBaseView.prototype.render.apply(this,arguments);

      this.$('#itemdatepicker').datetimepicker();
      this.filestyle({
        selector: '#attachedfile',
        binding: 'attachedfile',
        classButton: 'btn btn-default'
      });
      return this;
    },

    routeSuccessfulResult: function() {
      Backbone.history.navigate('#results', true);
    }
  });

  return ResultsFormView;
});
