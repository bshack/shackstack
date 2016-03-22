(() => {
    'use strict';
    const Backbone = require('../backbone/package');
    const $html = Backbone.$('html');
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
            googleAnalyticsId: window.env.googleAnalyticsId,
            // facebook configs
            fbAppId: window.env.fbAppId
        }
    });
})();
