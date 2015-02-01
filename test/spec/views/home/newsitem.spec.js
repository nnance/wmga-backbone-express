/**
*   NewsItem View Spec Test
*/


define(function(require) {
  'use strict';

  var NewsItemView = require('client/scripts/views/home/newsitem');

  describe('NewsItem View', function() {

    beforeEach(function() {
      this.newsItemView = new NewsItemView();
    });

    it('provides the "NewsItem View" instance', function() {
      // Expect it to exist
      expect(this.newsItemView).to.be.ok;
    });

  });
});
