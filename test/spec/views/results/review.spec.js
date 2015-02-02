/**
*   Review View Spec Test
*/


define(function(require) {
  'use strict';

  var ReviewView = require('client/scripts/views/results/review');

  describe('Review View', function() {

    beforeEach(function() {
      this.reviewView = new ReviewView({view: new Backbone.View()});
    });

    it('provides the "Review View" instance', function() {
      // Expect it to exist
      expect(this.reviewView).to.be.ok;
    });

  });
});
