// ## Load Modules

const gulp = require('gulp');
const runSequence = require('run-sequence');

// ## Build Task

gulp.task('build', callback => {
    'use strict';
    //runSequence support is only for gulp 3.x, 4.x natively support this functionalty
    return runSequence(
        ['sprite'],
        ['markup', 'style', 'script', 'documentation'],
        ['accessibility'],
        callback
    );
});
