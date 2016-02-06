// ## Load Modules

var gulp = require('gulp');
var handlebarsToHTML = require('gulp-compile-handlebars');
var handlebarsToJS = require('gulp-handlebars');
var htmllint = require('gulp-htmllint');
var rename = require('gulp-rename');
var wrapper = require('gulp-wrapper');
var plumber = require('gulp-plumber');
var data = require('gulp-data');
var livereload = require('gulp-livereload');
var _ = require('lodash-node');

// ## Environment Config

var config = require('../config');

// ## Markup Task

gulp.task('markup', function() {
    'use strict';
    //task
    return gulp.src(config.path.markup.source)
        //support for better error handling
        .pipe(plumber())
        .pipe(data(function(file) {
            //used the file path of the html file to determine the associated .json data file
            var globalDataFile = require('../../app/service/global.json');
            var dataFile = file.path.split(config.path.root).pop().replace('.handlebars', '.json');
            dataFile = require('../../' + config.path.root + 'service/' + dataFile);
            //return the data
            return _.extend({}, dataFile, globalDataFile);
        }))
        //compile the handlebars templates to html
        .pipe(handlebarsToHTML({
            cdn: config.path.cdn,
            www: config.path.www,
            service: config.path.service,
            version: config.path.version,
            isProduction: config.path.isProduction
        }, {
            batch: config.path.markup.partials.source
        }))
        //validate markup
        .pipe(htmllint({
            config: config.path.markup.htmlLint
        }))
        //switch the file extension from .handlebars to .html
        .pipe(rename(function(path) {
            path.extname = '.html';
        }))
        .pipe(gulp.dest(config.path.root))
        .pipe(livereload());
});

// ## markupTemplate Task

gulp.task('markupTemplate', ['cleanTemplate'], function() {
    'use strict';
    return gulp.src(config.path.markup.partials.watch)
        //support for better error handling
        .pipe(plumber())
        //compile the template to javascript
        .pipe(handlebarsToJS({
            // Pass local handlebars version to keep everything on the same version
            handlebars: require('handlebars')
        }))
        //wrap in define module and register all templates as partials
        .pipe(wrapper({
            getTemplateName: function(file) {
                return file.path.split('markup/').pop().replace('.js', '');
            },
            header: function(file){
                var templateName = this.getTemplateName(file);
                return 'var Handlebars = require("handlebars");if (typeof Handlebars.templates === \'undefined\') ' +
                    '{Handlebars.templates = {};}Handlebars.templates[\'' + templateName + '\'] = Handlebars.template(';
            },
            footer: function(file){
                var templateName = this.getTemplateName(file);
                return ');Handlebars.registerPartial(\'' + templateName + '\', Handlebars.templates[\'' + templateName +
                    '\']);module.exports = Handlebars.templates[\'' + templateName + '\'];';
            }
        }))
        .pipe(gulp.dest(config.path.markup.partials.destination));
});
