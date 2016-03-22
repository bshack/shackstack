var istanbul = require('browserify-istanbul');
module.exports = function(karma) {
    'use strict';
    karma.set({
        basePath: '',
        frameworks: [
            'jasmine',
            'browserify'
        ],
        files: [{
            pattern: 'app/assets/script/service/*.js'
        },
        {
            pattern: 'app/assets/test/spec/*Spec.js'
        }],
        reporters: [
            'progress',
            'coverage'
        ],
        preprocessors: {
            'app/assets/script/service/*.js': [
                'browserify'
            ],
            'app/assets/test/spec/*Spec.js': [
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
        browserify: {
            debug: true,
            transform: [
                'brfs',
                'browserify-shim',
                istanbul({
                    ignore: ['**/node_modules/**']
                }),
                ['babelify', {
                    'presets': ['es2015']
                }]
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
