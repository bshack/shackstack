// ## Load Modules

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');
var browserify = require('browserify');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var modernizr = require('modernizr');
var fs = require('fs');

// ## Environment Config

var config = require('../config');

// ## Script Lint Task
// make sure the code is all tidy

gulp.task('scriptLint', function() {
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
// complile the modules together, first it will lint the .js files and compile clientside templates for inclusion

gulp.task('script', ['scriptLint', 'markupTemplate', 'modernizr'], function() {
    'use strict';
    return browserify({
        entries: config.path.script.compile.source,
        debug: (config.path.isProduction ? false : true)
    })
        .bundle()
        .pipe(source(config.path.script.compile.filename))
        .pipe(buffer())
        .pipe(gulp.dest(config.path.script.compile.destination))
        .on('error', notify.onError('script: <%= error.message %>'));

});

// ## Modernizr Task
// build modernizr for this project.
// config example: https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json

gulp.task('modernizr', function(callback) {
    'use strict';
    modernizr.build({
        'feature-detects': [
            'touchevents'
        ]
    }, function(file) {
        fs.writeFile(config.path.script.modernizr, file, function() {
            return callback();
        });
    });
});
