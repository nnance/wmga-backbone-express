/*jshint expr: true*/

define(function(require) {
  'use strict';

  var NewsRouter = require('client/scripts/routes/news');

  describe('NewsRouter Model', function() {

    beforeEach(function() {
      this.router = new NewsRouter({
        contianer: new Backbone.View(),
        dataManager: {
          session: new Backbone.Model()
        }
      });
    });

    it('Should run a few assertions', function() {
      expect(this.router).to.be.ok;
    });

  });

});
