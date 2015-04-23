var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}
requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/script',
    // ask Require.js to load these files (all our tests)
    deps: tests,
    // start test run, once Require.js is done
    callback: window.__karma__.start,
    shim : {
        'foundation': {
            deps: [
                'jquery'
            ]
        },
        'foundation.abide': {
            deps: [
                'foundation'
            ]
        },
        'foundation.accordion': {
            deps: [
                'foundation'
            ]
        },
        'foundation.alert': {
            deps: [
                'foundation'
            ]
        },
        'foundation.clearing': {
            deps: [
                'foundation'
            ]
        },
        'foundation.dropdown': {
            deps: [
                'foundation'
            ]
        },
        'foundation.equalizer': {
            deps: [
                'foundation'
            ]
        },
        'foundation.interchange': {
            deps: [
                'foundation'
            ]
        },
        'foundation.joyride': {
            deps: [
                'foundation'
            ]
        },
        'foundation.magellan': {
            deps: [
                'foundation'
            ]
        },
        'foundation.offcanvas': {
            deps: [
                'foundation'
            ]
        },
        'foundation.orbit': {
            deps: [
                'foundation'
            ]
        },
        'foundation.reveal': {
            deps: [
                'foundation'
            ]
        },
        'foundation.slider': {
            deps: [
                'foundation'
            ]
        },
        'foundation.tab': {
            deps: [
                'foundation'
            ]
        },
        'foundation.tooltip': {
            deps: [
                'foundation'
            ]
        },
        'foundation.topbar': {
            deps: [
                'foundation',
            ]
        }
    },
    paths: {
        'foundation': '../bower_components/foundation/js/foundation/foundation',
        'foundation.abide': '../bower_components/foundation/js/foundation/foundation.abide',
        'foundation.accordion': '../bower_components/foundation/js/foundation/foundation.accordion',
        'foundation.alert': '../bower_components/foundation/js/foundation/foundation.alert',
        'foundation.clearing': '../bower_components/foundation/js/foundation/foundation.clearing',
        'foundation.dropdown': '../bower_components/foundation/js/foundation/foundation.dropdown',
        'foundation.equalizer': '../bower_components/foundation/js/foundation/foundation.equalizer',
        'foundation.interchange': '../bower_components/foundation/js/foundation/foundation.interchange',
        'foundation.joyride': '../bower_components/foundation/js/foundation/foundation.joyride',
        'foundation.magellan': '../bower_components/foundation/js/foundation/foundation.magellan',
        'foundation.offcanvas': '../bower_components/foundation/js/foundation/foundation.offcanvas',
        'foundation.orbit': '../bower_components/foundation/js/foundation/foundation.orbit',
        'foundation.reveal': '../bower_components/foundation/js/foundation/foundation.reveal',
        'foundation.slider': '../bower_components/foundation/js/foundation/foundation.slider',
        'foundation.tab': '../bower_components/foundation/js/foundation/foundation.tab',
        'foundation.tooltip': '../bower_components/foundation/js/foundation/foundation.tooltip',
        'foundation.topbar': '../bower_components/foundation/js/foundation/foundation.topbar',
        fastclick: '../bower_components/fastclick/lib/fastclick',
        handlebars: '../bower_components/handlebars/handlebars.runtime',
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/lodash/dist/lodash.underscore'
    }
});
