/**
*   Review View Spec Test
*/


define(function(require) {
  'use strict';

  var ReviewView = require('client/scripts/views/teams/review');

  describe('Review View', function() {

    beforeEach(function() {
      this.reviewView = new ReviewView({
        dataManager: {
          userCollection: new Backbone.Model()
        }
      });
    });

    it('provides the "Review View" instance', function() {
      // Expect it to exist
      expect(this.reviewView).to.be.ok;
    });

  });
});
