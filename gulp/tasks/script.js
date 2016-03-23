// ## Load Modules

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const browserify = require('browserify');
const notify = require('gulp-notify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const modernizr = require('modernizr');
const fs = require('fs');

// ## Environment Config

const config = require('../config');

// ## Script Lint Task
// make sure the code is all tidy

gulp.task('scriptLint', () => {
    'use strict';
    return gulp.src(config.path.script.all)
        //support for better error handling
        .pipe(plumber())
        //lint logic and code style
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .on('error', notify.onError('scriptLint: <%= error.message %>'));

});

// ## Script Task
// complile the modules together, first lint .js files, then build modernizr and compile clientside templates

gulp.task('script', ['scriptLint', 'markupTemplate', 'scriptModernizr'], () => {
    'use strict';
    return browserify({
        transform: ['babelify'],
        entries: config.path.script.compile.source,
        debug: (config.path.isProduction ? false : true)
    })
        .bundle()
        .pipe(source(config.path.script.compile.filename))
        .pipe(buffer())
        .pipe(gulp.dest(config.path.script.compile.destination))
        .on('error', notify.onError('script: <%= error.message %>'));

});

// ## Script Modernizr Task
// build modernizr for this project.
// config example: https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json

gulp.task('scriptModernizr', callback => {
    'use strict';
    modernizr.build({
        'feature-detects': [
            'touchevents'
        ]
    }, file => {
        fs.writeFile(config.path.script.modernizr, file, callback);
    });
});
