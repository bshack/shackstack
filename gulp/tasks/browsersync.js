// ## Load Modules

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var yargs = require('yargs').argv;

// ## Environment Config

var config = require('../config');
//setting a www domain for build
var sync;
//test if www is defined
if (yargs.sync === 'false') {
    sync = false;
} else {
    sync = true;
}

// ## Browser Sync Task

gulp.task('browsersync', function() {
    'use strict';

    if (sync) {

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

    }

});
