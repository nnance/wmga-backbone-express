/**
 * result route
 */

'use strict';

var Result = require('../controllers/result');

var routes = function(app) {
  //result route
  app.get('/rest/results', Result.getAll);
  app.get('/rest/results/:id', Result.getById);
  app.post('/rest/results', Result.addResult);
  app.put('/rest/results/:id', Result.updateResult);
  app.delete('/rest/results/:id', Result.deleteResult);
};

module.exports = routes;
