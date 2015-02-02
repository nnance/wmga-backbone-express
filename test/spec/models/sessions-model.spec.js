/*jshint expr: true*/

define(function(require) {
  'use strict';

  var SessionsModel = require('client/scripts/models/sessions-model');

  describe('SessionsModel Model', function() {

    beforeEach(function() {
      this.sessionsModel = new SessionsModel();
    });

    it('Should run a few assertions', function() {
      expect(this.sessionsModel).to.be.ok;
    });

  });

});
