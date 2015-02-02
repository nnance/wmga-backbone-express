/*jshint expr: true*/

define(function(require) {
  'use strict';

  var NewsModel = require('client/scripts/models/news-model');

  describe('NewsModel Model', function() {

    beforeEach(function() {
      this.newsModel = new NewsModel();
    });

    it('Should run a few assertions', function() {
      expect(this.newsModel).to.be.ok;
    });

  });

});
