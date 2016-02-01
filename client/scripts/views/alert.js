define(function(require) {
  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');
  var BaseView = require('client/scripts/views/viewbase');
  var AlertItem = Backbone.View.extend({
    template: _.template('<li><%= model.get("error") %></li>')
  });

  return BaseView.extend({
    className: 'alert alert-danger alert-dismissable',

    template: require('client/templates/alert.ejs'),

    initialize: function(options) {
      if (options.collection) {
        this.collection = options.collection;
        this.listenTo(this.collection, 'add', this.addError);
        this.listenTo(this.collection, 'remove', this.removeSubViewForModel);
      } else {
        this.errors = options.errors;
        _.each(options.errors, function(error){
          var model = new Backbone.Model({error: error});
          this.addError(model);
        }, this);
      }
    },

    addError: function(model) {
      this.addSubView({
        view: new AlertItem({model: model}),
        selector: 'ul'
      });
    }
  });
});
