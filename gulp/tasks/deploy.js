// ## Load Modules

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const stripDebug = require('gulp-strip-debug');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const sitemap = require('gulp-sitemap');
const runSequence = require('run-sequence');
const cssnano = require('gulp-cssnano');

// ## Environment Config

const config = require('../config');

// ## Release Task
// release task dependent on tasks to do code quality checks and build documentation

gulp.task('deploy', callback => {
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
gulp.task('copyRoot', () => {
    'use strict';
    return gulp.src(config.path.release.copy)
        //support for better error handling
        .pipe(plumber())
        .pipe(gulp.dest(config.path.build));

});

// ## Copy Report Task
// copy report dependency files to deploy directory
gulp.task('copyReport', () => {
    'use strict';
    return gulp.src(config.path.report.source)
        //support for better error handling
        .pipe(plumber())
        .pipe(gulp.dest(config.path.build + '/' + config.path.report.destination));

});

// ## Copy Fonts Task
// copy Font dependency files to deploy directory
gulp.task('copyFonts', () => {
    'use strict';
    return gulp.src(config.path.font.source)
        //support for better error handling
        .pipe(plumber())
        .pipe(gulp.dest(config.path.build + config.path.release.destination + config.path.version + '/' +
            config.path.font.destination));

});

// ## Minify Markup Task
// minify and copy markup files to deploy directory
gulp.task('minifyMarkup', () => {
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
gulp.task('copyData', () => {
    'use strict';
    return gulp.src(config.path.data.source)
        //support for better error handling
        .pipe(plumber())
        .pipe(gulp.dest(config.path.build + '/' + config.path.data.destination));

});

// ## Sitemap Task
// generate sitemap.xml
gulp.task('sitemap', () => {
    'use strict';
    return gulp.src(config.path.markup.destination)
        .pipe(sitemap({
            siteUrl: config.path.www
        }))
        .pipe(gulp.dest(config.path.build));

});

// ## Minify Style Task
// minify and copy style files to deploy diretory
gulp.task('minifyStyle', () => {
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
gulp.task('minifyScript', () => {
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
gulp.task('minifyImage', () => {
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
