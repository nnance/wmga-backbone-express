/*jshint expr: true*/

define(function(require) {
  'use strict';

  var TeamsModel = require('client/scripts/models/teams-model');

  describe('TeamsModel Model', function() {

    beforeEach(function() {
      this.teamsModel = new TeamsModel();
    });

    it('Should run a few assertions', function() {
      expect(this.teamsModel).to.be.ok;
    });

  });

});
