/**
*   SignIn View Spec Test
*/


define(function(require) {
  'use strict';

  var SignInView = require('client/scripts/views/app/signin');

  describe('SignIn View', function() {

    beforeEach(function() {
      this.signInView = new SignInView({collection: new Backbone.Collection()});
    });

    it('provides the "SignIn View" instance', function() {
      // Expect it to exist
      expect(this.signInView).to.be.ok;
    });

  });
});
