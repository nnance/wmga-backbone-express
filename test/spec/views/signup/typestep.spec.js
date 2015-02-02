/**
*   Type Step View Spec Test
*/


define(function(require) {
  'use strict';

  var TypeStepView = require('client/scripts/views/signup/typestep');

  describe('Type Step View', function() {

    beforeEach(function() {
      this.typeStepView = new TypeStepView({
        dataManager: new Backbone.Model()
      });
    });

    it('provides the "Type Step View" instance', function() {
      // Expect it to exist
      expect(this.typeStepView).to.be.ok;
    });

  });
});
