// ## Load Modules

var gulp = require('gulp');
var plato = require('gulp-plato');
var plumber = require('gulp-plumber');

// ## Environment Config

var config = require('../config');

// ## Documenation Task
// documentation task compiles all docco generated documents into handlbars templates
gulp.task('documentation', [
    'documentationScriptComplexity',
    'unit'
], function() {
    'use strict';
    return;
});

// ## Script Complexity Documenation Task

gulp.task('documentationScriptComplexity', function() {
    'use strict';
    return gulp.src(config.path.script.source)
        //support for better error handling
        .pipe(plumber())
        .pipe(plato(config.path.report.plato));

});
