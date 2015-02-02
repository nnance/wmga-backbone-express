/*jshint expr: true*/

define(function(require) {
  'use strict';

  var EventRouter = require('client/scripts/routes/events');

  describe('EventRouter Model', function() {

    beforeEach(function() {
      this.router = new EventRouter({
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
