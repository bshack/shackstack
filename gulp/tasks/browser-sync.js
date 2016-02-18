// ## Load Modules

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// ## Environment Config

var config = require('../config');

// ## Browser Sync Task

gulp.task('browser-sync', function() {
    'use strict';
    
    browserSync.init({
        //proxy: 'localhost'
        server: {
            baseDir: config.path.root
        }
    });

    // watch changed html files
    gulp.watch(config.path.markup.destination).on('change', browserSync.reload);

    // watch changed css files
    gulp.watch(config.path.style.source.css).on('change', browserSync.reload);

    // watch changed js files
    gulp.watch(config.path.script.release).on('change', browserSync.reload);

});
