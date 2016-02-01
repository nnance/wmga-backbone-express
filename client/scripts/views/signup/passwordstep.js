define(function(require) {
  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');
  var FormBaseView = require('client/scripts/views/formbase');
  var RequestPassword = require('client/scripts/models/requestpsw-model');

  var PasswordStepView = FormBaseView.extend({
    template: require('client/templates/signup/passwordstep.ejs'),

    events: {
      'click .btn': 'nextStep',
      'click #forgotPassword': 'sendPasswordEmail',
      'keypress input': 'keypress'
    },

    initialize: function(options) {
      FormBaseView.prototype.initialize.apply(this,arguments);
      this.dataManager = options.dataManager;
    },

    nextStep: function(e) {
      e.preventDefault();

      this.model.set(this.serializeForm('form'));

      this.session.validateAccount(this.model.get('email'), this.model.get('password'))
      .done(this.nextStepSuccess.bind(this))
      .fail(
        this.handleErrors
        .bind(this, this.model, {response: 'password does not match'}));
    },

    keypress: function(e) {
      if (e.which == 13) {
        this.nextStep(e);
      }
    },

    nextStepSuccess: function(data) {
      this.session.signin(data,true);
      this.dataManager.loadSecureData(_.bind(function(){
        var url = '#signup/paynow';
        if (this.session.get('paid')) {
          url = '#membership';
        }
        Backbone.history.navigate(url, true);
      },this));
    },

    sendPasswordEmail: function(e) {
      e.preventDefault();
      var passwordEmail = new RequestPassword({email: this.model.get('email')});
      passwordEmail.save()
      .done(
        this.handleErrors
        .bind(this, this.model, {result: 'Please check your email for your password.'})
      );
    }
  });

  return PasswordStepView;
});
