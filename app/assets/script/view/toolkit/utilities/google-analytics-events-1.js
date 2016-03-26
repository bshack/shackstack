(function() {
    'use strict';
    const Backbone = require('../../../backbone/package');
    module.exports = Backbone.View.extend({
        subscriptions: {
            'metrics:event:send': 'eventSend',
            'google-analytics-api-1:state:ready': 'apiReady'
        },
        apiReady: function() {
            //send pageview event
            this.eventSend({
                hitType: 'pageview'
            });
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
            if (this.el.ga) {
                this.el.ga('send', data);
            }
        }
    });
})();
