module.exports = function(karma) {
    'use strict';
    karma.set({
        basePath: '',
        frameworks: [
            'jasmine',
            'browserify'
        ],
        files: [{
            pattern: 'app/media/script/service/*.js',
            included: true
        },
        {
            pattern: 'app/media/test/spec/*Spec.js',
            included: true

        }],
        reporters: [
            'progress',
            'coverage'
        ],
        preprocessors: {
            'app/media/script/service/*.js': [
                'coverage',
                'browserify'
            ],
            'app/media/test/spec/*Spec.js': [
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
            dir: 'app/report/istanbul/',
            subdir: '.'
        },
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000
    });
};
