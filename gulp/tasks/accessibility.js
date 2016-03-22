// ## Load Modules

const gulp = require('gulp');
const accessibility = require('gulp-accessibility');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// ## Environment Config

const config = require('../config');

// ## Accessibility Task
// dependacy on markup task to have markup compiled

gulp.task('accessibility', () => {
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
