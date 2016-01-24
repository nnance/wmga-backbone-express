define(function(require) {
  'use strict';

  var FormBaseView = require('client/scripts/views/formbase');
  var CreateStep = FormBaseView.extend({
    template: JST['client/templates/signup/createstep.jst'],

    events: {
      'click .btn-primary': 'nextStep',
      'click .btn-default': 'createStep'
    },

    initialize: function(options) {
      FormBaseView.prototype.initialize.apply(this,arguments);
      this.dataManager = options.dataManager;
    },

    nextStep: function(e) {
      e.preventDefault();

      this.removeSubViews();
      var formData = this.serializeForm('form');

      this.model.validation = _.extend(this.model.validation, this.model.registrationValidation);
      this.model.set(formData);
      if (this.model.isValid(true)) {
        this.collection.fetch({data: {email: formData.email},
          success: _.bind(this.nextStepSuccess,this),
          error: _.bind(this.nextStepError,this)
        });
      } else {
        this.model.validate();
      }
    },

    createStep: function(e) {
      e.preventDefault();
      Backbone.history.navigate('#signup/email', true);
    },

    nextStepSuccess: function(col, resp, opt) {
      if (col.length !== 0) {
        this.showErrors({email: 'Email address alredy exists.'});
        this.$('.hidden').removeClass('hidden');
      } else {
        this.model.save({},{
          success: _.bind(function() {
            this.listenToOnce(this.session,'signedin', this.initData);
            this.session.signin(this.model.attributes,true);
          },this),
          error: _.bind(function(model, response, options) {
            this.handleError(model, response);
          },this)
        });
      }

    },

    initData: function() {
      this.dataManager.loadSecureData(_.bind(function(){
        Backbone.history.navigate('#signup/createpaynow', true);
      },this));
    },

    nextStepError: function(col, resp, opt) {
      this.showErrors(resp);
    }
  });

  return CreateStep;
});
