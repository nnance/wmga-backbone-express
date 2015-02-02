/*jshint expr: true*/

define(function(require) {
  'use strict';

  var Router = require('client/scripts/routes/router');

  describe('Router Model', function() {

    beforeEach(function() {
      this.router = new Router({
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
