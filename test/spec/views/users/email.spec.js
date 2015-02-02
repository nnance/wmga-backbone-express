/**
*   Email View Spec Test
*/


define(function(require) {
  'use strict';

  var EmailView = require('client/scripts/views/users/email');

  describe('Email View', function() {

    beforeEach(function() {
      this.emailView = new EmailView({collection: new Backbone.Collection()});
    });

    it('provides the "Email View" instance', function() {
      // Expect it to exist
      expect(this.emailView).to.be.ok;
    });

  });
});
