define(function(require) {
  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');
  var FormBaseView = require('client/scripts/views/formbase');

  return FormBaseView.extend({
    template: require('client/templates/results/form.ejs'),

    events: {
      'click #save-button': 'saveButton',
      'click #cancel-button': 'cancelButton'
    },

    onRender: function() {
      this.$('#itemdatepicker').datetimepicker({
        format: 'MM/DD/YYYY'
      });
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
