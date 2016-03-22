// ## Load Modules

const gulp = require('gulp');
const sassLint = require('gulp-sass-lint');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

// ## Environment Config

const config = require('../config');

// ## Style Task Complilation Logic

const styleCompile = () => {
    'use strict';
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
        .on('error', notify.onError('style: <%= error.message %>'));
};

// ## Style Task

gulp.task('style', styleCompile);

// ## Style and Sprite Task
// use this when you want to have the sprite and associated SCSS generated before style is compiled.

gulp.task('styleAndSprite', ['sprite'], styleCompile);
