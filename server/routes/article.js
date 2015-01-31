/**
 * article Routes
 */

'use strict';

var Article = require('../controllers/article');

var routes = function(app) {
  app.get('/rest/articles', Article.getAll);
  app.get('/rest/articles/:id', Article.getById);
  app.post('/rest/articles', Article.addArticle);
  app.put('/rest/articles/:id', Article.updateArticle);
  app.delete('/rest/articles/:id', Article.deleteArticle);
};

module.exports = routes;
