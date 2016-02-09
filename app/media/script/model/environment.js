(function() {
    'use strict';
    var Backbone = require('../backbone/package');
    var $html = Backbone.$('html');
    module.exports = Backbone.Model.extend({
        defaults: {
            // the page we are on
            view: $html.attr('id') || '',
            // the domain for www root
            www: window.env.www,
            // the cdn domain
            cdn: window.env.cdn,
            // the service domain
            service: window.env.service,
            // release version
            version: window.env.version,
            // metric configs
            metrics: {
                'google-analytics-id': window.env['google-analytics-id']
            }
        }
    });
})();
