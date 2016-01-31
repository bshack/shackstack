// ## Load Modules

var gulp = require('gulp');
var sprity = require('sprity');
var gulpif = require('gulp-if');
var svg2png = require('gulp-svg2png');
var plumber = require('gulp-plumber');

// ## Environment Config

var config = require('../config');

// ## Sprite to Style Task
// sprite task dependent on vectorToRaster task to generete .pngs from .svg source files

gulp.task('sprite', ['vectorToRaster'], function() {
    'use strict';
    //generate the sprite image and the scss styles
    return sprity.src({
        src: config.path.image.sprite.compliled,
        style: config.path.image.sprite.scss,
        margin: 10,
        processor: 'sass',
        'style-indent-size': 4,
        template: config.path.image.sprite.template
    })
    //if the file is a .png save it to the image directory
    .pipe(gulpif(
        '*.png', gulp.dest(
            config.path.image.sprite.destination.sprite),
            // else it is the generated .scss file so save it to the style directory
            gulp.dest(config.path.style.destination.watch + '/base'
        )
    ));
});

// ## Vector to Raster Image Task

gulp.task('vectorToRaster', function() {
    'use strict';
    return gulp.src(config.path.image.sprite.source)
        //support for better error handling
        .pipe(plumber())
        //make all the .svg icons .pngs as well
        .pipe(svg2png())
        .pipe(gulp.dest(config.path.image.sprite.destination.png));
});
