module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('report', 'generate code quality reporting', function() {
        grunt.task.run('concurrent:report');
    });
};
