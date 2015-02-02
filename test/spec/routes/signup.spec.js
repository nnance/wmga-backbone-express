/*jshint expr: true*/

define(function(require) {
  'use strict';

  var SignUpRouter = require('client/scripts/routes/signup');

  describe('SignUpRouter Model', function() {

    beforeEach(function() {
      this.router = new SignUpRouter({
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
