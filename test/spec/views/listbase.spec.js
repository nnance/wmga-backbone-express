/**
*   ListBase View Spec Test
*/


define(function(require) {
  'use strict';

  var ListBaseView = require('client/scripts/views/listbase');

  describe('ListBase View', function() {

    beforeEach(function() {
      this.listBaseView = new ListBaseView({
        collection: new Backbone.Collection(),
        dataManager: new Backbone.Model()
      });
    });

    it('provides the "ListBase View" instance', function() {
      // Expect it to exist
      expect(this.listBaseView).to.be.ok;
    });

  });
});
