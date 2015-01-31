/**
 * Production Configuration
 */
'use strict';

// Production specific configuration
var prodConfig = {
  logLevel: 'short',
  database: {
    // URL to connect to database
    url: 'mongodb://nodejitsu_nancenick:9sbirh3oi9li8bhhavccb4ov3q@ds061558.mongolab.com:61558/nodejitsu_nancenick_nodejitsudb2721215477'
  },
  server: {
    // Port to run server on
    port: 80
  }
};

module.exports = prodConfig;
