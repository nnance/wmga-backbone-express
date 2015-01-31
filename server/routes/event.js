/**
 * event routes
 */

'use strict';

var Event = require('../controllers/event');

var routes = function(app) {
  app.get('/rest/events', Event.getAll);
  app.get('/rest/events/:id', Event.getById);
  app.post('/rest/events', Event.addEvent);
  app.put('/rest/events/:id', Event.updateEvent);
  app.delete('/rest/events/:id', Event.deleteEvent);
};

module.exports = routes;
