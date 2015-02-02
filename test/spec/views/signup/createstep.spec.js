/**
*   Create Step View Spec Test
*/


define(function(require) {
  'use strict';

  var CreateStepView = require('client/scripts/views/signup/createstep');

  describe('Create Step View', function() {

    beforeEach(function() {
      this.createStepView = new CreateStepView({
        dataManager: new Backbone.Model()
      });
    });

    it('provides the "Create Step View" instance', function() {
      // Expect it to exist
      expect(this.createStepView).to.be.ok;
    });

  });
});
