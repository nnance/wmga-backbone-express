/**
*   Password Step View Spec Test
*/


define(function(require) {
  'use strict';

  var PasswordStepView = require('client/scripts/views/signup/passwordstep');

  describe('Password Step View', function() {

    beforeEach(function() {
      this.passwordStepView = new PasswordStepView({
        dataManager: new Backbone.Model()
      });
    });

    it('provides the "Password Step View" instance', function() {
      // Expect it to exist
      expect(this.passwordStepView).to.be.ok;
    });

  });
});
