/**
*   ListItemBase View Spec Test
*/


define(function(require) {
  'use strict';

  var ListItemBaseView = require('client/scripts/views/listitembase');

  describe('ListItemBase View', function() {

    beforeEach(function() {
      this.listItemBaseView = new ListItemBaseView();
    });

    it('provides the "ListItemBase View" instance', function() {
      // Expect it to exist
      expect(this.listItemBaseView).to.be.ok;
    });

  });
});
