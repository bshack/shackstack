// ## Load Modules

var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');

// ## Environment Config

var config = require('../config');

// ## Style Task Complilation Logic

var styleCompile = function() {
    return gulp.src(config.path.style.source.scss)
        //support for better error handling
        .pipe(plumber())
        //validate scss
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        //compile sass into css
        .pipe(sass({
            indentWidth: 4,
            sourceComments: true
        }).on('error', sass.logError))
        //add browser prefixes
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.path.style.destination.watch))
        .pipe(livereload());
};

// ## Style Task

gulp.task('style', styleCompile);

// ## Style and Sprite Task
// use this when you want to have the sprite and associated SCSS generated before style is compiled.

gulp.task('styleAndSprite', ['sprite'], styleCompile);
