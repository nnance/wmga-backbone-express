/*jshint expr: true*/

define(function(require) {
  'use strict';

  var EventsModel = require('client/scripts/models/events-model');

  describe('EventsModel Model', function() {

    beforeEach(function() {
      this.eventsModel = new EventsModel();
    });

    it('Should run a few assertions', function() {
      expect(this.eventsModel).to.be.ok;
    });

  });

});
