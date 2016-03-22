// ## Load Modules

const gulp = require('gulp');
const browsersync = require('browser-sync').create();

// ## Environment Config

const config = require('../config');

// ## Reload

const reload = () => {
    'use strict';
    return browsersync.reload();
};

// ## Watch Task

// these workaround for browsersync and gulp 3.x, when 4.x is released this should be revisted
gulp.task('markup-watch', ['markup'], reload);
gulp.task('style-watch', ['style'], reload);
gulp.task('script-watch', ['script'], reload);
gulp.task('partials-watch', ['script', 'markup'], reload);
gulp.task('image-watch', ['styleAndSprite'], reload);

// ### Starup the Browsersync server

gulp.task('watch', ['build'], () => {
    'use strict';

    //start up Browsersync
    browsersync.init({
        //proxy: 'localhost'
        server: {
            baseDir: config.path.root
        }
    });

    //watch scss
    gulp.watch(
        config.path.style.source.scss,
        ['style-watch']
    );

    //watch js
    gulp.watch(
        config.path.script.all,
        ['script-watch']
    );

    // watch handlebars templates
    gulp.watch(
        config.path.markup.source,
        ['markup-watch']
    );

    // watch handlebars partials
    gulp.watch(
        config.path.markup.partials.watch,
        ['partials-watch']
    );

    //image
    gulp.watch(
        config.path.image.sprite.source,
        ['image-watch']
    );

});
