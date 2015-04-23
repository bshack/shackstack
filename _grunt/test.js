module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('test', 'generate revision for test', function() {
        grunt.log.write('********************* generating test version *********************\n');
        grunt.task.run('concurrent:test');
    });
};
