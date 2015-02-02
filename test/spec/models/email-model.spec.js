/*jshint expr: true*/

define(function(require) {
  'use strict';

  var EmailModel = require('client/scripts/models/email-model');

  describe('EmailModel Model', function() {

    beforeEach(function() {
      this.emailModel = new EmailModel();
    });

    it('Should run a few assertions', function() {
      expect(this.emailModel).to.be.ok;
    });

  });

});
