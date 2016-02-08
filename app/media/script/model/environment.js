(function() {
    'use strict';
    var Backbone = require('../backbone/package');
    var $html = Backbone.$('html');
    module.exports = Backbone.Model.extend({
        defaults: {
            // the page we are on
            view: $html.attr('id') || '',
            // the domain for www root
            www: $html.data('www'),
            // the cdn domain
            cdn: $html.data('cdn'),
            // the service domain
            service: $html.data('service'),
            // release version
            version: $html.data('version'),
            // metric configs
            metrics: {
                'google-analytics-id': $html.data('google-analytics-id')
            }
        }
    });
})();
