/**
*   Contact View Spec Test
*/


define(function(require) {
  'use strict';

  var ContactView = require('client/scripts/views/app/contact');

  describe('Contact View', function() {

    beforeEach(function() {
      this.contactView = new ContactView();
    });

    it('provides the "Contact View" instance', function() {
      // Expect it to exist
      expect(this.contactView).to.be.ok;
    });

  });
});
