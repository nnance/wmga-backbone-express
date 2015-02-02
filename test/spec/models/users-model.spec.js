/*jshint expr: true*/

define(function(require) {
  'use strict';

  var UsersModel = require('client/scripts/models/users-model');

  describe('UsersModel Model', function() {

    beforeEach(function() {
      this.usersModel = new UsersModel();
    });

    it('Should run a few assertions', function() {
      expect(this.usersModel).to.be.ok;
    });

  });

});
