/**
*   Form View Spec Test
*/


define(function(require) {
  'use strict';

  var FormView = require('client/scripts/views/results/form');

  describe('Form View', function() {

    beforeEach(function() {
      this.formView = new FormView();
    });

    it('provides the "Form View" instance', function() {
      // Expect it to exist
      expect(this.formView).to.be.ok;
    });

  });
});
