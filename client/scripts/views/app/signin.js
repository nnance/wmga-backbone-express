define(function(require) {
  'use strict';

  var FormBaseView = require('client/scripts/views/formbase');
  var RequestPassword = require('client/scripts/models/requestpsw-model');
  var SignInView = FormBaseView.extend({
    template: JST['client/templates/app/signin.jst'],

    events: {
      'click .btn': 'saveButton',
      'click #forgotPassword': 'sendPasswordEmail'
    },

    initialize: function(options) {
      FormBaseView.prototype.initialize.apply(this, arguments);
      this.dataManager = options.dataManager;
    },

    saveFailed: function(model, xhr, options) {
      if (xhr.responseText) {
        this.handleErrors(model,{response: xhr.responseText});
      } else {
        this.handleErrors(model, {response: 'email / password not found!'});
      }
    },

    saveCompleted: function(model, response, options) {
      this.listenToOnce(this.session,'signedin', this.initData);
      this.session.signin(model.attributes, model.has('rememberMe'));
    },

    initData: function() {
      this.dataManager.loadSecureData(_.bind(function(){
        Backbone.history.navigate('#membership',true);
      },this));
    },

    sendPasswordEmail: function(e) {
      e.preventDefault();
      this.removeSubViews();
      var passwordEmail = new RequestPassword();
      _.extend(passwordEmail, Backbone.Validation.mixin);
      this.listenTo(passwordEmail, 'validated:invalid', this.handleErrors);
      passwordEmail.save(this.serializeForm('form'),{
        success: _.bind(function() {
          this.handleErrors(this.model,{result: 'Please check your email for your password.'});
        },this)
      });
    }

  });

  return SignInView;
});
