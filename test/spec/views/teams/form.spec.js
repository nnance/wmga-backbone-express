/**
*   Form View Spec Test
*/


define(function(require) {
  'use strict';

  var FormView = require('client/scripts/views/teams/form');

  describe('Form View', function() {

    beforeEach(function() {
      this.formView = new FormView({
        model: new Backbone.Model(),
        dataManager: new Backbone.Model(),
        session: new Backbone.Model()
      });
    });

    it('provides the "Form View" instance', function() {
      // Expect it to exist
      expect(this.formView).to.be.ok;
    });

  });
});
