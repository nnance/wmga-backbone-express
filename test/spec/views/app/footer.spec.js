/**
*   Footer View Spec Test
*/


define(function(require) {
  'use strict';

  var FooterView = require('client/scripts/views/app/footer');

  describe('Footer View', function() {

    beforeEach(function() {
      this.footerView = new FooterView();
    });

    it('provides the "Footer View" instance', function() {
      // Expect it to exist
      expect(this.footerView).to.be.ok;
    });

  });
});
