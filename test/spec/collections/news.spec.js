/*jshint expr: true*/

define(function(require) {
  'use strict';

  var News = require('client/scripts/collections/news');

  describe('News Collection', function() {

    beforeEach(function() {
      this.newsCollection = new News();
    });

    it('Should run a few assertions', function(){
      expect(this.newsCollection).to.be.ok;
    });

  });

});
