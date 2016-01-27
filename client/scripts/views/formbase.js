/* global define */
define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var _ = require('underscore');
  var $ = require('jquery');
  var BaseView = require('client/scripts/views/viewbase');
  var AlertView = require('client/scripts/views/alert');

  return BaseView.extend({

    initialize: function() {
      if (this.model) {
        Backbone.Validation.bind(this);
        this.listenTo(this.model, 'validated:invalid', this.handleErrors);
        this.listenTo(this.model, 'sync', this.saveCompleted);
        this.listenTo(this.model, 'error', this.saveFailed);
        this.listenTo(this, 'uploaded', this.fileuploadCompleted);
      }
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
        this.addSubView({
          view: new AlertView({errors: errors}),
          selector: '#alert'
        });

        // highlight the fields with errors
        for (var key in errors) {
          if (errors.hasOwnProperty(key)) {
            this.$('#' + key).parent().addClass('has-error');
          }
        }
      }
    },

    sendFile: function() {
      this.filestyleUpload({
        url: '/rest/attachments',
        success: _.bind(function() {
          this.trigger('uploaded', arguments);
        }, this),
        error: _.bind(function(jqXHR, textStatus) {
          this.handleErrors(this.model, textStatus);
        }, this)
      });
    },

    saveFailed: function(model, xhr) {
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

    saveCompleted: function(model) {
      if (this.collection) {
        this.collection.add(model);
      }

      if (this.filestyleHasFiles()) {
        this.sendFile();
      } else {
        this.fileuploadCompleted();
      }
    },

    fileuploadCompleted: function() {
      this.delegateEvents();
      this.routeSuccessfulResult();
    },

    filestyle: function(options) {
      if (!options || !options.selector) {
        throw new Error('Required selector option missing');
      }
      this.filestyleOptions = options;

      this.$(options.selector).filestyle(options);
      this.$(options.selector).next().find('.group-span-filestyle').append('<a class="btn btn-default hidden">Clear</a>');

      this.filestyleClearBtn = this.$(options.selector).next().find('a');

      if (this.model && options.binding) {
        this.$(options.selector).next().find('input').val(this.model.get(options.binding));
        if (this.model.get(options.binding) && this.model.get(options.binding).length > 0) {
          this.filestyleClearBtn.removeClass('hidden');
        }
      }

      this.$(options.selector).on('change', _.bind(this.filestylePrerpareUpload,this));
      this.filestyleClearBtn.on('click', _.bind(this.filestyleClearFile,this));
    },

    filestylePrerpareUpload: function(event) {
      this.filestyleFiles = event.target.files;
      if (this.model && this.filestyleOptions.binding) {
        this.model.set(this.filestyleOptions.binding, this.filestyleFiles[0].name);
      }
      this.filestyleClearBtn.removeClass('hidden');
    },

    filestyleHasFiles: function() {
      return this.filestyleFiles;
    },

    filestyleClearFile: function() {
      if (this.model && this.filestyleOptions.binding) {
        this.model.set(this.filestyleOptions.binding,'');
      }

      this.$(this.filestyleOptions.selector).filestyle('clear');
      this.filestyleClearBtn.addClass('hidden');
    },

    filestyleUpload: function(options) {
      var data = new FormData();
      $.each(this.filestyleFiles, function(key, value) {
        data.append(key, value);
      });

      $.ajax({
        url: options.url,
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false, // Don't process the files
        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
        success: options.success, // returns data, textStatus, jqXHR
        error: options.error // returns jqXHR, textStatus, errorThrown
      });
    },

    routeSuccessfulResult: function() {
      // noop function to be added by subclass
    }

  });
});
