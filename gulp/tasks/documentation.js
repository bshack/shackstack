// ## Load Modules

const gulp = require('gulp');
const plato = require('gulp-plato');
const plumber = require('gulp-plumber');

// ## Environment Config

const config = require('../config');

// ## Documenation Task
// documentation task compiles all docco generated documents into handlbars templates
gulp.task('documentation', [
    'documentationScriptComplexity',
    'unit'
], () => {
    'use strict';
    return;
});

// ## Script Complexity Documenation Task

gulp.task('documentationScriptComplexity', () => {
    'use strict';
    return gulp.src(config.path.script.source)
        //support for better error handling
        .pipe(plumber())
        .pipe(plato(config.path.report.plato));

});
