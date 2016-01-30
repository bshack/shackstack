// ## Load Modules

var gulp = require('gulp');
var runSequence = require('run-sequence');

// ## Build Task

gulp.task('build', function() {
    //runSequence support is only for gulp 3.x, 4.x natively support this functionalty
    return runSequence(
        ['sprite'],
        ['markup', 'markupTemplate', 'style', 'script', 'documentation'],
        ['accessibility']
    );
});
