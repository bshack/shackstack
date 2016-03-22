// ## Load Modules

const gulp = require('gulp');
const handlebarsToHTML = require('gulp-compile-handlebars');
const handlebarsToJS = require('gulp-handlebars');
const htmllint = require('gulp-htmllint');
const rename = require('gulp-rename');
const wrapper = require('gulp-wrapper');
const plumber = require('gulp-plumber');
const data = require('gulp-data');
const notify = require('gulp-notify');
const _ = require('lodash-node');


// ## Environment Config

const config = require('../config');

// ## Markup Task
// create .html files written to app root

gulp.task('markup', () => {
    'use strict';
    //task
    return gulp.src(config.path.markup.source)
        //support for better error handling
        .pipe(plumber())
        .pipe(data(function(file) {
            let dataFile;
            // page specific json files are optional
            try {
                dataFile = file.path.split(config.path.root).pop().replace('.handlebars', '.json');
                dataFile = require('../../' + config.path.data.directory + '/' +
                    config.path.data.pageDirectory + dataFile);
            } catch(err) {
                dataFile = {};
            }
            //return the data
            return _.extend(
                {},
                require('../../' + config.path.data.directory + '/' + config.path.data.pageDirectory + '/' +
                    config.path.data.pageDefaultData),
                dataFile,
                {
                    cdn: config.path.cdn,
                    www: config.path.www,
                    service: config.path.service,
                    version: config.path.version,
                    isProduction: config.path.isProduction
                }
            );
        }))
        //compile the handlebars templates to html
        .pipe(handlebarsToHTML({}, {
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
        .on('error', notify.onError('markup: <%= error.message %>'));
});

// ## markupTemplate Task
// create precomiled .js templates

gulp.task('markupTemplate', ['cleanTemplate'], () => {
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
                let templateName = this.getTemplateName(file);
                return '(function() {' +
                    'var Handlebars = require("handlebars");' +
                    'if (typeof Handlebars.templates === \'undefined\') {' +
                    'Handlebars.templates = {};'+
                    '}' +
                    'Handlebars.templates[\'' + templateName + '\'] = Handlebars.template(';
            },
            footer: function(file){
                let templateName = this.getTemplateName(file);
                return ');' +
                'Handlebars.registerPartial(\'' + templateName + '\', Handlebars.templates[\'' + templateName +'\']);' +
                'module.exports = Handlebars.templates[\'' + templateName + '\'];' +
                '})();';
            }
        }))
        .pipe(gulp.dest(config.path.markup.partials.destination));
});
