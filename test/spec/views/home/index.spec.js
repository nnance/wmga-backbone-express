/**
*   HomeIndex View Spec Test
*/


define(function(require) {
  'use strict';

  var IndexView = require('client/scripts/views/home/index');

  describe('HomeIndex View', function() {

    beforeEach(function() {
      this.indexView = new IndexView({
        newsCol: new Backbone.Collection(),
        eventsCol: new Backbone.Collection()
      });
    });

    it('provides the "HomeIndex View" instance', function() {
      // Expect it to exist
      expect(this.indexView).to.be.ok;
    });

  });
});
