module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['./app/**/*.js'],
      options: {
        esnext: true
      }
    },
    jest: {
      options: {
        coverage: true,
        testPathPattern: /.\/__tests__\/.*-test.js/
      }
    },
    watch: {
      javascripts: {
        files: ['./app/**/*.js'],
        tasks: ['jshint']
      },
      jester: {
        files: ['./app/**/*.js'],
        tasks: ['jest']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'jest', 'watch']);
};