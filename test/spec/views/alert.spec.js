/**
*   Alert View Spec Test
*/


define(function(require) {
  'use strict';

  var AlertView = require('client/scripts/views/alert');

  describe('Alert View', function() {

    beforeEach(function() {
      this.alertView = new AlertView({errors: {}});
    });

    it('provides the "Alert View" instance', function() {
      // Expect it to exist
      expect(this.alertView).to.be.ok;
    });

  });
});
