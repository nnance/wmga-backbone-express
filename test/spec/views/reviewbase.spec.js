/**
*   ReviewBase View Spec Test
*/


define(function(require) {
  'use strict';

  var ReviewBaseView = require('client/scripts/views/reviewbase');

  describe('ReviewBase View', function() {

    beforeEach(function() {
      this.reviewBaseView = new ReviewBaseView();
    });

    it('provides the "ReviewBase View" instance', function() {
      // Expect it to exist
      expect(this.reviewBaseView).to.be.ok;
    });

  });
});
