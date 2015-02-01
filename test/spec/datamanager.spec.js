/**
*   DataManager Spec Test
*/


define(function(require) {
  'use strict';

  var DataManager = require('client/scripts/datamanager');
  var Session = require('client/scripts/models/sessions-model');

  describe('DataManager', function() {

    beforeEach(function() {
      this.dataManager = new DataManager({session: new Session()});
    });

    it('provides the "DataManager" instance', function() {
      // Expect it to exist
      expect(this.dataManager).to.be.ok;
    });

  });
});
