(() => {
    'use strict';
    const Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        initialize: function(options) {
            this.options = options;
            //add an empty div that will be later replaced by the youtube player iframe
            this.$el.append('<div></div>');
        },
        subscriptions: {
            'youtube-api-1:state:ready': 'eventApiReady'
        },
        eventApiReady: function() {
            const _this = this;
            /*eslint-disable */
            this.player = new YT.Player(this.$el.find('div').get(0), Backbone.$.extend({
                events: {
                    'onReady': _this.eventPlayerReady,
                    'onStateChange': _this.eventStateChanged
                }
            }, this.options));
            /*eslint-enable */
        },
        eventPlayerReady: function(e) {
            // broadcast video is ready
            Backbone.Mediator.publish('youtube-player-1:state:ready', e);
        },
        eventStateChanged: function(e) {
            let done = false;
            // broadcast video state change
            Backbone.Mediator.publish('youtube-player-1:state:changed', e);
            // broadcast video unstarted
            if (e.data === -1) {
                Backbone.Mediator.publish('youtube-player-1:state:unstarted', e);
            }
            // broadcast video ended
            if (e.data === 0) {
                Backbone.Mediator.publish('youtube-player-1:state:ended', e);
                Backbone.Mediator.publish('metrics:event:send', {
                    hitType: 'event',
                    eventCategory: 'video',
                    eventAction: 'ended',
                    eventLabel: e.target.getVideoData()['video_id']
                });
            }
            // broadcast video playing
            if (e.data === 1) {
                Backbone.Mediator.publish('youtube-player-1:state:playing', e);
                Backbone.Mediator.publish('metrics:event:send', {
                    hitType: 'event',
                    eventCategory: 'video',
                    eventAction: 'playing',
                    eventLabel: e.target.getVideoData()['video_id']
                });
            }
            // broadcast video paused
            if (e.data === 2) {
                Backbone.Mediator.publish('youtube-player-1:state:paused', e);
                Backbone.Mediator.publish('metrics:event:send', {
                    hitType: 'event',
                    eventCategory: 'video',
                    eventAction: 'paused',
                    eventLabel: e.target.getVideoData()['video_id']
                });
            }
            // broadcast video buffering
            if (e.data === 3) {
                Backbone.Mediator.publish('youtube-player-1:state:buffering', e);
                Backbone.Mediator.publish('metrics:event:send', {
                    hitType: 'event',
                    eventCategory: 'video',
                    eventAction: 'buffering',
                    eventLabel: e.target.getVideoData()['video_id']
                });
            }
            // broadcast video cued
            if (e.data === 5) {
                Backbone.Mediator.publish('youtube-player-1:state:cued', e);
                Backbone.Mediator.publish('metrics:event:send', {
                    hitType: 'event',
                    eventCategory: 'video',
                    eventAction: 'cued',
                    eventLabel: e.target.getVideoData()['video_id']
                });
            }
            /*eslint-disable */
            if (e.data === YT.PlayerState.PLAYING && !done) {
                setTimeout(e.target.stopVideo, 6000);
                done = true;
            }
            /*eslint-enable */
        }
    });
})();
