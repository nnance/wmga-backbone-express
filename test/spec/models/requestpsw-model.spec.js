/*jshint expr: true*/

define(function(require) {
  'use strict';

  var RequestpswModel = require('client/scripts/models/requestpsw-model');

  describe('RequestpswModel Model', function() {

    beforeEach(function() {
      this.requestpswModel = new RequestpswModel();
    });

    it('Should run a few assertions', function() {
      expect(this.requestpswModel).to.be.ok;
    });

  });

});
