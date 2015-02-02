/**
*   App View Spec Test
*/


define(function(require) {
  'use strict';

  var AppView = require('client/scripts/views/app');

  describe('App View', function() {

    beforeEach(function() {
      this.view = new AppView({errors: {}});
    });

    it('provides the "App View" instance', function() {
      // Expect it to exist
      expect(this.view).to.be.ok;
    });

  });
});
