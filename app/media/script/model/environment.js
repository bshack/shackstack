(function() {
    'use strict';
    var Backbone = require('../backbone/package');
    var $html = Backbone.$('html');
    module.exports = Backbone.Model.extend({
        defaults: {
            view: $html.attr('id') || '',
            www: $html.data('www'),
            cdn: $html.data('cdn'),
            service: $html.data('service'),
            metrics: {
                'google-analytics-id': $html.data('google-analytics-id')
            }
        }
    });
})();
