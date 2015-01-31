/**
 * Database Configuration
 */

'use strict';
var mongoose = require('mongoose');
var settings = require('./env/default');
var fs = require('fs');
var path = require('path');
var db = {};

// Add coloring for console output
require('colors');

var databaseConfig = function(app) {

  // Connect to database
  mongoose.connect(settings.database.url, settings.database.options);
  mongoose.set('debug', settings.database.debug);

  // load models
  var modelsPath = __dirname + '/../models';
  fs.readdirSync(modelsPath).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
      require(modelsPath + '/' + file);
    }
  });

  return db;
};

module.exports = databaseConfig;
