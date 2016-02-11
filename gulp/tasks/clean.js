// ## Load Modules

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var plumber = require('gulp-plumber');

// ## Environment Config

var config = require('../config');

// ## cleanDeploy Task

gulp.task('cleanDeploy', function() {
    'use strict';
    return gulp.src(config.path.build, {read: false})
        //support for better error handling
        .pipe(plumber())
        // delete the build directory
        .pipe(rimraf());
});

// ## cleanTemplate Task

gulp.task('cleanTemplate', function() {
    'use strict';
    return gulp.src(config.path.markup.partials.destination, {read: false})
        //support for better error handling
        .pipe(plumber())
        // delete the build directory
        .pipe(rimraf());
});
