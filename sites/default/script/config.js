require.config({
    shim : {
        'ember': {
            exports: 'Ember',
            deps: [
                'jquery',
                'handlebars'
            ]
        },
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
                'foundation'
            ]
        },
        'fullpage': {
            deps: [
                'jquery'
            ]
        },
        handlebars: {
            exports: 'Handlebars'
        },
        'modernizr': {
            exports: 'Modernizr'
        },
        'slick': {
            deps: [
                'jquery'
            ]
        }
    },
    paths: {
        ember: '../bower_components/ember/ember',
        'ember-template-compiler': '../bower_components/ember/ember-template-compiler',
        foundation: '../bower_components/foundation/js/foundation',
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
        fingerprint: '../bower_components/fingerprint/fingerprint',
        fullpage: '../bower_components/fullpage/jquery.fullPage',
        handlebars: '../bower_components/handlebars/handlebars.runtime',
        jquery: '../bower_components/jquery/dist/jquery',
        modernizr: '../bower_components/modernizr/modernizr',
        phoneformat: '../bower_components/phoneformat/phoneformat.min',
        slick: '../bower_components/slick-carousel/slick/slick',
        underscore: '../bower_components/lodash/dist/lodash.underscore'
    }
});
