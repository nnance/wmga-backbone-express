/**
*   FormBase View Spec Test
*/


define(function(require) {
  'use strict';

  var FormBaseView = require('client/scripts/views/formbase');

  describe('FormBase View', function() {

    beforeEach(function() {
      this.formBaseView = new FormBaseView({model: new Backbone.Model(), modelAttr: {}, modelTypeName: {}});
    });

    it('provides the "FormBase View" instance', function() {
      // Expect it to exist
      expect(this.formBaseView).to.be.ok;
    });

  });
});
