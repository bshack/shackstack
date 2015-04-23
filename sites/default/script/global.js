require(['config'], function() {
    'use strict';
    require([
        'jquery',
        'ember',
        'fastclick',
        'foundation',
        'module/template'
    ], function($, ember, FastClick, foundation, template, ajax) {
        var App = ember.Application.create();
        App.ApplicationView = ember.View.extend({
            templateName: 'application'
        });
        App.Router.map(function() {
            this.route('about');
        });
        FastClick.attach(document.body);
        $(document).foundation();
    });
});
