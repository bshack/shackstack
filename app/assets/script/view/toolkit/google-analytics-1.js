(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    var Fingerprint = require('fingerprintjs');
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
            })(this.el, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
            //set up google analytics
            this.el.ga('create', this.model.get('googleAnalyticsId'), 'auto');
            //send the fingerprint id (94% accurate unique id with out cookie tracking)
            this.el.ga('set', 'dimension1', new Fingerprint({canvas: true}).get().toString());
            //send the release version id
            this.el.ga('set', 'dimension2', this.model.get('version'));
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
            this.el.ga('send', data);
        }
    });
})();
