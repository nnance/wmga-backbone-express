define(function(require) {
  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');
  var FormBaseView = require('client/scripts/views/formbase');


  var CreateStep = FormBaseView.extend({
    template: require('client/templates/signup/createstep.ejs'),

    events: {
      'click .btn-primary': 'nextStep',
      'click .btn-default': 'createStep',
      'keypress input': 'keypress'
    },

    initialize: function(options) {
      FormBaseView.prototype.initialize.apply(this,arguments);
      this.dataManager = options.dataManager;
    },

    nextStep: function(e) {
      e.preventDefault();

      this.model.set(this.serializeForm('form'), {validate: true});

      if (this.model.isValid()) {
        this.collection.fetch({data: {email: this.model.get('email')}})
        .done(this.nextStepSuccess.bind(this))
        .fail(this.nextStepError.bind(this));
      }
    },

    keypress: function(e) {
      if (e.which == 13) {
        this.nextStep(e);
      }
    },

    createStep: function(e) {
      e.preventDefault();
      Backbone.history.navigate('#signup/email', true);
    },

    nextStepSuccess: function(col) {
      if (col.length !== 0) {
        this.showErrors({email: 'Email address alredy exists.'});
        this.$('.hidden').removeClass('hidden');
      } else {
        this.model.save({},{
          success: _.bind(function() {
            this.listenToOnce(this.session,'signedin', this.initData);
            this.session.signin(this.model.attributes,true);
          },this),
          error: _.bind(function(model, response) {
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

    nextStepError: function(col, resp) {
      this.showErrors(resp);
    }
  });

  return CreateStep;
});
