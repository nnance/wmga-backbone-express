/**
*   Index View Spec Test
*/


define(function(require) {
  'use strict';

  var IndexView = require('client/scripts/views/signup/index');

  describe('Index View', function() {

    beforeEach(function() {
      this.indexStepView = new IndexView();
    });

    it('provides the "Index View" instance', function() {
      // Expect it to exist
      expect(this.indexStepView).to.be.ok;
    });

  });
});
