// ## Load Modules

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// ## Environment Config

var config = require('../config');

// ## Browser Sync Task

gulp.task('browser-sync', function() {
    'use strict';
    browserSync.init({
        //proxy: 'localhost'
        server: {
            baseDir: './app'
        }
    });

    // watch changed html files
    gulp.watch(config.path.markup.destination).on('change', reload);

    // watch changed css files
    gulp.watch(config.path.style.source.css).on('change', reload);

    // watch changed js files
    gulp.watch(config.path.script.release).on('change', reload);
});
