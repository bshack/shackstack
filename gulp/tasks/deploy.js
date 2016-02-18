// ## Load Modules

var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var sitemap = require('gulp-sitemap');
var runSequence = require('run-sequence');
var cssnano = require('gulp-cssnano');

// ## Environment Config

var config = require('../config');

// ## Release Task
// release task dependent on tasks to do code quality checks and build documentation

gulp.task('deploy', function(callback) {
    'use strict';
    //runSequence support is only for gulp 3.x, 4.x natively support this functionalty
    return runSequence(
        ['cleanDeploy'],
        ['sprite'],
        ['markup', 'style', 'script', 'documentation'],
        ['accessibility'],
        ['copyRoot', 'copyReport', 'copyFonts', 'minifyMarkup', 'copyData', 'minifyStyle', 'minifyScript',
            'minifyImage', 'sitemap'],
        callback
    );
});

// ## Copy Root Task
// copy root dependency files to deploy directory
gulp.task('copyRoot', function() {
    'use strict';
    return gulp.src(config.path.release.copy)
        //support for better error handling
        .pipe(plumber())
        .pipe(gulp.dest(config.path.build));

});

// ## Copy Report Task
// copy report dependency files to deploy directory
gulp.task('copyReport', function() {
    'use strict';
    return gulp.src(config.path.report.source)
        //support for better error handling
        .pipe(plumber())
        .pipe(gulp.dest(config.path.build + '/' + config.path.report.destination));

});

// ## Copy Fonts Task
// copy Font dependency files to deploy directory
gulp.task('copyFonts', function() {
    'use strict';
    return gulp.src(config.path.font.source)
        //support for better error handling
        .pipe(plumber())
        .pipe(gulp.dest(config.path.build + config.path.release.destination + config.path.version + '/' +
            config.path.font.destination));

});

// ## Minify Markup Task
// minify and copy markup files to deploy directory
gulp.task('minifyMarkup', function() {
    'use strict';
    return gulp.src(config.path.markup.destination)
        //support for better error handling
        .pipe(plumber())
        //minify
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true
        }))
        .pipe(gulp.dest(config.path.build));

});

// ## Copy Data Task
// stubbed out data files over
gulp.task('copyData', function() {
    'use strict';
    return gulp.src(config.path.data.source)
        //support for better error handling
        .pipe(plumber())
        .pipe(gulp.dest(config.path.build + '/' + config.path.data.destination));

});

// ## Sitemap Task
// generate sitemap.xml
gulp.task('sitemap', function() {
    'use strict';
    return gulp.src(config.path.markup.destination)
        .pipe(sitemap({
            siteUrl: config.path.www
        }))
        .pipe(gulp.dest(config.path.build));

});

// ## Minify Style Task
// minify and copy style files to deploy diretory
gulp.task('minifyStyle', function() {
    'use strict';
    return gulp.src(config.path.style.source.css)
        //support for better error handling
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(cssnano({safe: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.path.build + config.path.release.destination + config.path.version + '/' +
            config.path.style.destination.release));

});

// ## Minify Script Task
// minify and copy script files to deploy directory
gulp.task('minifyScript', function() {
    'use strict';
    return gulp.src(config.path.script.release)
        //support for better error handling
        .pipe(plumber())
        .pipe(sourcemaps.init())
        //remove console.log and alert
        .pipe(stripDebug())
        //minify
        .pipe(uglify())
        //write sourcemaps
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.path.build + config.path.release.destination + config.path.version + '/' +
            config.path.script.destination));

});

// ## Minify Image Task
// minify and copy images to deploy directory
gulp.task('minifyImage', function() {
    'use strict';
    return gulp.src(config.path.image.source)
        //support for better error handling
        .pipe(plumber())
        //minify
        .pipe(imagemin({
            progressive: true,
            multipass: true,
            plugins: [
                {cleanupAttrs: true},
                {cleanupEnableBackground: true},
                {cleanupIDs: true},
                {cleanupNumericValues: true},
                {collapseGroup: true},
                {convertColors: true},
                {convertPathData: true},
                {convertShapeToPath: true},
                {convertStyleToAttrs: true},
                {convertTransform: true},
                {mergePaths: true},
                {moveElemsAttrsToGroup: true},
                {moveGroupAttrsToElems: true},
                {removeComments: true},
                {removeDoctype: true},
                {removeEditorsNSData: true},
                {removeEmptyAttrs: true},
                {removeEmptyContainers: true},
                {removeEmptyText: true},
                {removeHiddenElems: true},
                {removeMetadata: true},
                {removeNonInheritableGroupAttrs: true},
                {removeRasterImages: true},
                {removeTitle: true},
                {removeUnknownsAndDefaults: true},
                {removeUnusedNS: true},
                {removeUselessStrokeAndFill: true},
                {removeViewBox: true},
                {removeXMLProcInst: true},
                {sortAttrs: true},
                {transformsWithOnePath: true}
            ]
        }))
        .pipe(gulp.dest(config.path.build + config.path.release.destination + config.path.version + '/' +
            config.path.image.destination));
});
