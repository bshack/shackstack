// ## Load Modules

var gulp = require('gulp');
var livereload = require('gulp-livereload');

// ## Environment Config

var config = require('../config');

// ## Watch Task

// watch task dependent on tasks to make sure latest code changes are compiled
gulp.task('watch', ['build'], function() {
    livereload.listen();
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
        ['markupTemplate', 'markup']
    );
    gulp.watch(
        config.path.image.sprite.source,
        ['styleAndSprite']
    );
});
