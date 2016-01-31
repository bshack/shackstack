// ## Load Modules

var gulp = require('gulp');
var docco = require('gulp-docco');
var plato = require('gulp-plato');
var plumber = require('gulp-plumber');

// ## Environment Config

var config = require('../config');

// ## Documenation Task
// documentation task compiles all docco generated documents into handlbars templates
gulp.task('documentation', [
    'documentationScriptComplexity',
    'documentationScript',
    'documentationStyle',
    'documentationBuild',
    'unit'
], function() {
    'use strict';
    return;
});

// ## Gulp Documenation Task

gulp.task('documentationBuild', function() {
    'use strict';
    return gulp.src(config.path.script.gulp)
        //support for better error handling
        .pipe(plumber())
        .pipe(docco())
        .pipe(gulp.dest(config.path.report.docco.build));

});

// ## Script Documenation Task

gulp.task('documentationScript', function() {
    'use strict';
    return gulp.src(config.path.script.source)
        //support for better error handling
        .pipe(plumber())
        .pipe(docco())
        .pipe(gulp.dest(config.path.report.docco.script));

});

// ## Style Documenation Task

gulp.task('documentationStyle', function() {
    'use strict';
    return gulp.src(config.path.style.source.scss)
        //support for better error handling
        .pipe(plumber())
        .pipe(docco())
        .pipe(gulp.dest(config.path.report.docco.style));

});

// ## Script Complexity Documenation Task

gulp.task('documentationScriptComplexity', function() {
    'use strict';
    return gulp.src(config.path.script.source)
        //support for better error handling
        .pipe(plumber())
        .pipe(plato(config.path.report.plato));

});
