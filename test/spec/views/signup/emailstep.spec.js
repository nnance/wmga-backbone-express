/**
*   Email Step View Spec Test
*/


define(function(require) {
  'use strict';

  var EmailStepView = require('client/scripts/views/signup/emailstep');

  describe('Email Step View', function() {

    beforeEach(function() {
      this.emailStepView = new EmailStepView();
    });

    it('provides the "Email Step View" instance', function() {
      // Expect it to exist
      expect(this.emailStepView).to.be.ok;
    });

  });
});
