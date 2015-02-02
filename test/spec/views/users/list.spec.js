/**
*   List View Spec Test
*/


define(function(require) {
  'use strict';

  var ListView = require('client/scripts/views/users/list');

  describe('List View', function() {

    beforeEach(function() {
      this.listView = new ListView({collection: new Backbone.Collection()});
    });

    it('provides the "List View" instance', function() {
      // Expect it to exist
      expect(this.listView).to.be.ok;
    });

  });
});
