// ## Load Modules

var gulp = require('gulp');
var accessibility = require('gulp-accessibility');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

// ## Environment Config

var config = require('../config');

// ## Accessibility Task
// dependacy on markup task to have markup compiled

gulp.task('accessibility', function() {
    'use strict';
    return gulp.src(config.path.markup.destination)
        //support for better error handling
        .pipe(plumber())
        //show only errors for AAA spec
        .pipe(accessibility({
            accessibilityLevel: 'WCAG2AAA',
            reportLevels: {
                notice: false,
                warning: false,
                error: true,
                verbose: true
            }
        }))
        .on('error', notify.onError('accessibility: <%= error.message %>'));

});
