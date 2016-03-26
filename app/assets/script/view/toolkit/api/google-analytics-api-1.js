(function() {
    'use strict';
    const Backbone = require('../../../backbone/package');
    const Fingerprint = require('fingerprintjs');
    module.exports = Backbone.View.extend({
        initialize: function() {
            var _this = this;
            //google analytics tracking library
            /*eslint-disable */
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                a.onload = function() {
                    //set up google analytics
                    _this.el.ga('create', _this.model.get('googleAnalyticsId'), 'auto');
                    //send the fingerprint id (94% accurate unique id with out cookie tracking)
                    _this.el.ga('set', 'dimension1', new Fingerprint({canvas: true}).get().toString());
                    //send the release version id
                    _this.el.ga('set', 'dimension2', _this.model.get('version'));
                    //message that the api is ready
                    Backbone.Mediator.publish('google-analytics-api-1:state:ready');
                };
                m.parentNode.insertBefore(a, m)
            })(this.el, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
        }
    });
})();
