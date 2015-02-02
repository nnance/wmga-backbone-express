/*jshint expr: true*/

define(function(require) {
  'use strict';

  var ResultsRouter = require('client/scripts/routes/results');

  describe('ResultsRouter Model', function() {

    beforeEach(function() {
      this.router = new ResultsRouter({
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
