// ## Load Modules

const gulp = require('gulp');
const KarmaServer = require('karma').Server;

// ## Environment Config

const config = require('../config');

// ## Unit Task

gulp.task('unit', done => {
    'use strict';
    //run unit tests and write out coverage
    return new KarmaServer({
        configFile: config.path.script.karma,
        singleRun: true
    }, done).start();

});
