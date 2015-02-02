/**
*   ListItem View Spec Test
*/


define(function(require) {
  'use strict';

  var ListItemView = require('client/scripts/views/events/listitem');

  describe('ListItem View', function() {

    beforeEach(function() {
      this.listItemView = new ListItemView({collection: new Backbone.Collection()});
    });

    it('provides the "ListItem View" instance', function() {
      // Expect it to exist
      expect(this.listItemView).to.be.ok;
    });

  });
});
