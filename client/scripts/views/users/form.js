define(function(require) {
  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');
  var FormBaseView = require('client/scripts/views/formbase');
  /* eslint-disable no-unused-vars */
  var dataTimePicker = require('bootstrap-datetimepicker');
  var dataTimeCss = require('bootstrap-datetimepicker-css');
  /* eslint-disable no-unused-vars */

  return FormBaseView.extend({
    template: require('client/templates/users/form.ejs'),

    events: {
      'click #save-button': 'saveButton',
      'click #cancel-button': 'cancelButton'
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
