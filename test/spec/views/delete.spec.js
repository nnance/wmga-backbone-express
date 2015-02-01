/**
*   Delete View Spec Test
*/


define(function(require) {
  'use strict';

  var DeleteView = require('client/scripts/views/delete');

  describe('Delete View', function() {

    beforeEach(function() {
      this.deleteView = new DeleteView({model: new Backbone.Model(), modelAttr: {}, modelTypeName: {}});
    });

    it('provides the "Delete View" instance', function() {
      // Expect it to exist
      expect(this.deleteView).to.be.ok;
    });

  });
});
