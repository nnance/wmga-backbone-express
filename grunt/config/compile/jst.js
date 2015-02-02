// Configuration for JST task(s)
// Compile JST templates to single `.js` file
// using the JST namespace (accessible via window.JST)
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('jst', {
    server: {
      files: {
        '<%= yeogurt.tmp %>/templates/templates.js': ['<%= yeogurt.client %>/templates/**/*.ejs']
      }
    },
    dist: {
      files: {
        '<%= yeogurt.tmp %>/templates/templates.js': ['<%= yeogurt.client %>/templates/**/*.ejs']
      }
    },
    test: {
      options: {
        namespace: 'JST'
      },
      files: {
        'test/scripts/templates.js': ['<%= yeogurt.client %>/templates/**/*.ejs']
      }
    }
  });

};

module.exports = taskConfig;
