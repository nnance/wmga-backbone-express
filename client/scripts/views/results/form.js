define(function(require) {
  'use strict';

  var _ = require('underscore');
  var FormBaseView = require('client/scripts/views/formbase');

  return FormBaseView.extend({
    template: JST['client/templates/results/form.jst'],

    events: {
      'click #save-button': 'saveButton',
      'click #cancel-button': 'cancelButton',
    },

    onRender: function() {
      this.$('#itemdatepicker').datetimepicker();
      this.filestyle({
        selector: '#attachedfile',
        binding: 'attachedfile',
        classButton: 'btn btn-default'
      });
    },

    serializeData: function() {
      return _.extend(this.model.toJSON(), {
        itemdate: this.getDateAttr('itemdate'),
        isNew: this.model.isNew()
      });
    },

    routeSuccessfulResult: function() {
      Backbone.history.navigate('#results', true);
    }
  });
});
