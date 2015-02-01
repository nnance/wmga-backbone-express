define(function(require) {
    'use strict';

    var BaseView = require('client/scripts/views/viewbase');
    var AlertView = require('client/scripts/views/alert');

    var FormBaseView = BaseView.extend({

        initialize: function(options) {
            if (this.model) {
                Backbone.Validation.bind(this);
                this.listenTo(this.model, 'validated:invalid', this.handleErrors);
                this.listenTo(this.model, 'sync', this.saveCompleted);
                this.listenTo(this.model, 'error', this.saveFailed);
                this.listenTo(this, 'uploaded', this.fileuploadCompleted);
            }
        },

        serializeForm: function(selector) {
            var result = {};
            var fields = this.$(selector).serializeArray();
            _.each(fields, function(field) {
                if (result[field.name]) {
                    if (!result[field.name].push) {
                        result[field.name] = [result[field.name]];
                    }
                    result[field.name].push(field.value || '');
                } else {
                    result[field.name] = field.value || '';
                }
            });
            return result;
        },

        handleErrors: function(model, errors) {
            // restore the model
            model.set(model.previousAttributes());
            this.delegateEvents();
            this.showErrors(errors);
        },

        showErrors: function(errors) {
            if (_.keys(errors).length > 0) {
                // show the errors in an alert area
                var alertView = new AlertView({errors: errors});
                this.insertView(alertView.render(), '#alert');

                // highlight the fields with errors
                for (var key in errors) {
                  if (errors.hasOwnProperty(key)) {
                    this.$('#' + key).parent().addClass('has-error');
                  }
                }
            }
        },

        sendFile: function(callback) {
            this.filestyleUpload({
                url: '/rest/attachments',
                success: _.bind(function(data, textStatus, jqXHR) {
                    this.trigger('uploaded', arguments);
                }, this),
                error: _.bind(function(jqXHR, textStatus, errorThrown) {
                    this.handleErrors(this.model, textStatus);
                }, this)
            });
        },

        saveFailed: function(model, xhr, options) {
            this.handleErrors(model,{response: xhr.responseText});
        },

        cancelButton: function(e) {
            e.preventDefault();
            history.back(1);
        },

        getFormData: function() {
            return this.serializeForm('form');
        },

        saveButton: function(e) {
            e.preventDefault();
            $(e.target).text('saving...');
            this.undelegateEvents();
            this.removeSubViews();
            this.model.save(this.getFormData());
        },

        saveCompleted: function(model, response, options) {
            if (this.collection) {
                this.collection.add(model);
            }

            if (this.filestyleHasFiles()) {
                this.sendFile(_.bind(this.routeSuccessfulResult,this));
            } else {
                this.delegateEvents();
                this.routeSuccessfulResult();
            }
        },

        fileuploadCompleted: function() {
            this.delegateEvents();
            this.routeSuccessfulResult();
        },

        routeSuccessfulResult: function() {
            // noop function to be added by subclass
        }

    });

    return FormBaseView;
});
