// Karma configuration
// Generated on Sun Oct 20 2013 07:28:56 GMT+0200 (CEST)

module.exports = function(config) {
    'use strict';
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '.',
        // frameworks to use
        frameworks: ['jasmine', 'requirejs'],
        // list of files / patterns to load in the browser
        files: [
            'test/test-main.js',
            {
                pattern: './bower_components/foundation/js/foundation/*.js',
                included: false
            },
            {
                pattern: './bower_components/fastclick/lib/fastclick.js',
                included: false
            },
            {
                pattern: './bower_components/handlebars/handlebars.runtime.js',
                included: false
            },
            {
                pattern: './bower_components/jquery/dist/jquery.js',
                included: false
            },
            {
                pattern: './bower_components/lodash/dist/lodash.underscore.js',
                included: false
            },
            {
                pattern: 'test/spec/*Spec.js',
                included: false
            },
            {
                pattern: 'script/**/**/*.js',
                included: false
            },
            {
                pattern: 'script/**/*.js',
                included: false
            },
            {
                pattern: 'script/*.js',
                included: false
            }
        ],
        // list of files to exclude
        exclude: [
            'script/config.js'
        ],
        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'coverage'],
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/*.js': ['coverage']
        },
        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : './_report/istanbul/'
        },
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE, config.LOG_ERROR, config.LOG_WARN, config.LOG_INFO, config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
