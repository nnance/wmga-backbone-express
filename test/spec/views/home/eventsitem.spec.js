/**
*   EventsItem View Spec Test
*/


define(function(require) {
  'use strict';

  var EventsItemView = require('client/scripts/views/home/eventsitem');

  describe('EventsItem View', function() {

    beforeEach(function() {
      this.eventsItemView = new EventsItemView();
    });

    it('provides the "EventsItem View" instance', function() {
      // Expect it to exist
      expect(this.eventsItemView).to.be.ok;
    });

  });
});
