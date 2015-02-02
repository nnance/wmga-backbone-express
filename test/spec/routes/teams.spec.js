/*jshint expr: true*/

define(function(require) {
  'use strict';

  var TeamsRouter = require('client/scripts/routes/teams');

  describe('TeamsRouter Model', function() {

    beforeEach(function() {
      this.router = new TeamsRouter({
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
