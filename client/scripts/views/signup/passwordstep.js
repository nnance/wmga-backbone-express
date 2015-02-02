define(function(require) {
  'use strict';

  var FormBaseView = require('client/scripts/views/formbase');
  var RequestPassword = require('client/scripts/models/requestpsw-model');

  var PasswordStepView = FormBaseView.extend({
    template: JST['client/templates/signup/passwordstep.ejs'],

    events: {
      'click .btn': 'nextStep',
      'click #forgotPassword': 'sendPasswordEmail'
    },

    initialize: function(options) {
      FormBaseView.prototype.initialize.apply(this,arguments);
      this.dataManager = options.dataManager;
    },

    nextStep: function(e) {
      e.preventDefault();
      this.model.set(this.serializeForm('form'));

      this.session.validateAccount(this.model.get('email'), this.model.get('password'))
      .done( _.bind(function(data, textStatus, jqXHR){
        this.nextStepSuccess(data);
      },this))
      .fail( _.bind(function(jqXHR, textStatus, errorThrown) {
        this.handleErrors(this.model, {response: 'password does not match'});
      },this));

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
      .done(_.bind(function() {
        this.handleErrors(this.model,{result: 'Please check your email for your password.'});
      },this));
    }
  });

  return PasswordStepView;
});
