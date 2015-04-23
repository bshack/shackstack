module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('build:local', function() {
        grunt.task.run([
            'compile-handlebars:local',
            'handlebars:compile',
            'compass:development',
            'autoprefixer:development'
        ]);
    });
    grunt.registerTask('build:development', 'build development', function() {
        grunt.task.run([
            'clean:build',
            'concurrent:build',
            'build:markup:development'
        ]);
    });
    grunt.registerTask('build:test', 'build test', function() {
        grunt.task.run([
            'clean:build',
            'concurrent:build',
            'build:markup:test'
        ]);
    });
    grunt.registerTask('build:production', 'build production', function() {
        grunt.task.run([
            'clean:build',
            'concurrent:build',
            'build:markup:production'
        ]);
    });
    grunt.registerTask('build:app', 'generate revision for app', function() {
        grunt.log.write('********************* generating app bundle from release version *********************\n');
        grunt.task.run([
            'build:production',
            'clean:app',
            'sync:app',
            'cordovacli:build',
            'cordovacli:emulate',
        ]);
    });
    grunt.registerTask('build:bundle', 'generate revision for bundle', function() {
        grunt.log.write('********************* generating bundle from release version *********************\n');
        grunt.task.run([
            'build:production',
            'compress:bundle'
        ]);
    });
    grunt.registerTask('build:markup', 'build markup', function(env) {
        grunt.task.run([
            'compile-handlebars:' + env,
            'htmllint:release',
            'htmlmin:release'
        ]);
    });
    grunt.registerTask('build:style', 'build css', function() {
        grunt.task.run([
            'compass:release',
            'autoprefixer:release'
        ]);
    });
    grunt.registerTask('build:script', 'build scripts', function() {
        grunt.task.run([
            'handlebars:compile',
            'requirejs:release',
            'strip:release'
        ]);
    });
};
