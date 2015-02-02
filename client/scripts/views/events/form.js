define(function(require) {
  'use strict';

  var FormBaseView = require('client/scripts/views/formbase');
  var EventsFormView = FormBaseView.extend({
    template: JST['client/templates/events/form.jst'],

    events: {
      'click #save-button': 'saveButton',
      'click #cancel-button': 'cancelButton'
    },

    render: function() {
      FormBaseView.prototype.render.apply(this,arguments);

      this.$('#startdatepicker').datetimepicker();
      this.$('#enddatepicker').datetimepicker();
      this.filestyle({
        selector: '#attachedfile',
        binding: 'attachedfile',
        classButton: 'btn btn-default'
      });

      return this;
    },

    routeSuccessfulResult: function() {
      Backbone.history.navigate('#events', true);
    }
  });

  return EventsFormView;
});
