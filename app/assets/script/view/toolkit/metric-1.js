(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    var Fingerprint = require('fingerprintjs');
    var ModelEnvironment = require('../../model/environment');
    var env = new ModelEnvironment();
    module.exports = Backbone.View.extend({
        initialize: function() {
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
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
            //set up google analytics
            window.ga('create', env.get('metrics')['google-analytics-id'], 'auto');
            //send the fingerprint id (94% accurate unique id with out cookie tracking)
            window.ga('set', 'dimension1', new Fingerprint({canvas: true}).get().toString());
            //send the release version id
            window.ga('set', 'dimension2', env.get('version'));
            /*eslint-enable */
            //send pageview event
            this.eventSend({
                hitType: 'pageview'
            });
        },
        subscriptions: {
            'metrics:event:send': 'eventSend'
        },
        eventSend: function(data) {
            // possible options
            // {
            //     hitType: 'event',
            //     eventCategory: 'Video',
            //     eventAction: 'play',
            //     eventLabel: 'cats.mp4',
            //     hitCallback: function() {}
            // }
            window.ga('send', data);
        }
    });
})();
