/**
 * attachments routes
 */

'use strict';

var Attachment = require('../controllers/attachment');

var routes = function(app) {
  app.post('/rest/attachments', Attachment.saveAttachment);
};

module.exports = routes;
