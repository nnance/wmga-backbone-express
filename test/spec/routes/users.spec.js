/*jshint expr: true*/

define(function(require) {
  'use strict';

  var UserRouter = require('client/scripts/routes/users');

  describe('UserRouter Model', function() {

    beforeEach(function() {
      this.router = new UserRouter({
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
