define(function(require) {

  // TODO Fix file attachment.  Getting index 0 not found on server when saving attachment
  // TODO Clean up file attachment button layout
  // TODO Add support for multiple file attachments

  'use strict';

  var _ = require('underscore');
  var FormBaseView = require('client/scripts/views/formbase');

  return FormBaseView.extend({
    template: JST['client/templates/events/form.jst'],

    events: {
      'click #save-button': 'saveButton',
      'click #cancel-button': 'cancelButton'
    },

    onRender: function() {
      this.$('#startdatepicker').datetimepicker();
      this.filestyle({
        selector: '#attachedfile',
        binding: 'attachedfile',
        classButton: 'btn btn-default'
      });
    },

    serializeData: function() {
      return _.extend(this.model.toJSON(), {
        startdate: this.getDateAttr('startdate'),
        isNew: this.model.isNew()
      });
    },

    routeSuccessfulResult: function() {
      Backbone.history.navigate('#events', true);
    }
  });
});
