(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        initialize: function(options) {
            this.options = options;
            //add an empty div that will be later replaced by the youtube player iframe
            this.$el.append('<div></div>');
        },
        subscriptions: {
            'youtube-api-1:state:ready': 'eventApiReady',
            'youtube-player-1:state:playing': 'eventVideoPlay'
        },
        eventApiReady: function() {
            /*eslint-disable */
            this.player = new YT.Player(this.$el.find('div').get(0), Backbone.$.extend({
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            }, this.options));
            /*eslint-enable */
        },
        eventVideoPlay: function(e) {
            //only fire metrics for this video when there multiples on the page
            if (!this.metricsPlayLogged &&
                    e.target.getVideoData()['video_id'] === this.player.getVideoData()['video_id']) {
                //just log one play per page load, sometimes play is triggered alot when network congestion is present
                this.metricsPlayLogged = true;
                //log a panel view
                Backbone.Mediator.publish('metrics:event:send', {
                    hitType: 'event',
                    eventCategory: 'video',
                    eventAction: 'play',
                    eventLabel: this.player.getVideoData()['video_id']
                });
            }
        }
    });
})();
