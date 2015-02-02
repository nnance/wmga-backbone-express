/*jshint expr: true*/

define(function(require) {
  'use strict';

  var Teams = require('client/scripts/collections/teams');

  describe('Teams Collection', function() {

    beforeEach(function() {
      this.teamsCollection = new Teams();
    });

    it('Should run a few assertions', function(){
      expect(this.teamsCollection).to.be.ok;
    });

  });

});
