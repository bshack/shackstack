'use strict';

module.exports = function(karma) {
    karma.set({
        basePath: '',
        frameworks: [
            'jasmine',
            'browserify'
        ],
        files: [{
            pattern: 'media/script/service/*.js',
            included: true
        },
        {
            pattern: 'media/test/spec/*Spec.js',
            included: true

        }],
        reporters: [
            'progress',
            'coverage'
        ],
        preprocessors: {
            'media/script/service/*.js': [
                'coverage',
                'browserify'
            ],
            'media/test/spec/*Spec.js': [
                'browserify'
            ]
        },
        browsers: [
            //'Chrome',
            //'Firefox',
            //'Safari',
            'PhantomJS'
        ],
        singleRun: false,
        autoWatch: false,
        // browserify configuration
        browserify: {
            debug: true,
            transform: [
                'brfs',
                'browserify-shim'
            ]
        },
        coverageReporter: {
            type: 'html',
            dir: 'report/istanbul/',
            subdir: '.'
        },
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000
    });
};
