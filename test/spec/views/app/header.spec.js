/**
*   Header View Spec Test
*/


define(function(require) {
  'use strict';

  var HeaderView = require('client/scripts/views/app/header');

  describe('Header View', function() {

    beforeEach(function() {
      this.headerView = new HeaderView({collection: new Backbone.Collection()});
    });

    it('provides the "Header View" instance', function() {
      // Expect it to exist
      expect(this.headerView).to.be.ok;
    });

  });
});
