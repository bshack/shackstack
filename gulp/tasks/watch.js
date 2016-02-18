// ## Load Modules

var gulp = require('gulp');

// ## Environment Config

var config = require('../config');

// ## Watch Task

// watch task dependent on tasks to make sure latest code changes are compiled
gulp.task('watch', ['build', 'browsersync'], function() {
    'use strict';

    //watch scss
    gulp.watch(
        config.path.style.source.scss,
        ['style']
    );
    //watch js
    gulp.watch(
        config.path.script.all,
        ['script']
    );
    // watch handlebars templates
    gulp.watch(
        config.path.markup.source,
        ['markup']
    );
    // watch handlebars partials
    gulp.watch(
        config.path.markup.partials.watch,
        ['script', 'markup']
    );
    //image
    gulp.watch(
        config.path.image.sprite.source,
        ['styleAndSprite']
    );
});
