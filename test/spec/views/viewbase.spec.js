/**
*   ViewBase View Spec Test
*/


define(function(require) {
  'use strict';

  var ViewBaseView = require('client/scripts/views/viewbase');

  describe('ViewBase View', function() {

    beforeEach(function() {
      this.viewBaseView = new ViewBaseView();
    });

    it('provides the "ViewBase View" instance', function() {
      // Expect it to exist
      expect(this.viewBaseView).to.be.ok;
    });

  });
});
