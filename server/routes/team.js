/**
 * team routes
 */

'use strict';

var Team = require('../controllers/team');

var routes = function(app) {
  app.get('/rest/teams', Team.getList);
  app.get('/rest/teams/:id', Team.getById);
  app.post('/rest/teams', Team.addTeam);
  app.put('/rest/teams/:id', Team.updateTeam);
  app.delete('/rest/teams/:id', Team.deleteTeam);
};

module.exports = routes;
