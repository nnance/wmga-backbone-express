/**
*   Pay Now Step View Spec Test
*/


define(function(require) {
  'use strict';

  var PayNowStepView = require('client/scripts/views/signup/paynowstep');

  describe('Pay Now Step View', function() {

    beforeEach(function() {
      this.payNowStepView = new PayNowStepView({
        dataManager: new Backbone.Model()
      });
    });

    it('provides the "Pay Now Step View" instance', function() {
      // Expect it to exist
      expect(this.payNowStepView).to.be.ok;
    });

  });
});
