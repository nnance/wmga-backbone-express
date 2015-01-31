/**
 * result route
 */

'use strict';

var User = require('../controllers/user');

var routes = function(app) {
  app.get('/rest/users', User.getList);
  app.get('/rest/users/:id', User.getById);
  app.post('/rest/users', User.addUser);
  app.post('/rest/users/email', User.emailAllUsers);
  app.post('/rest/users/notify', User.notifyAllUsers);
  app.put('/rest/users/:id', User.updateUser);
  app.delete('/rest/users/:id', User.deleteUser);
};

module.exports = routes;
