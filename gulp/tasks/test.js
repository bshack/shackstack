// ## Load Modules

var gulp = require('gulp');
var KarmaServer = require('karma').Server;

// ## Environment Config

var config = require('../config');

// ## Unit Task

gulp.task('unit', function(done) {
    'use strict';
    //run unit tests and write out coverage
    return new KarmaServer({
        configFile: config.path.script.karma,
        singleRun: true
    }, done).start();

});
