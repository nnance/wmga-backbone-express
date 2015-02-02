/*jshint expr: true*/

define(function(require) {
  'use strict';

  var Sessions = require('client/scripts/collections/sessions');

  describe('Sessions Collection', function() {

    beforeEach(function() {
      this.sessionsCollection = new Sessions();
    });

    it('Should run a few assertions', function(){
      expect(this.sessionsCollection).to.be.ok;
    });

  });

});
