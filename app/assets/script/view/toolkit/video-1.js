(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        initialize: function(options) {
            /*eslint-disable */
            var _this = this;
            var done = false;
            //add an empty div that will be later replaced by the youtube player iframe
            _this.$el.append('<div></div>');
            //load the api
            Backbone.$.ajax({
                url: 'https://www.youtube.com/iframe_api',
                dataType: 'script'
            });
            // This function creates an iframe (and YouTube player) after the API code downloads.
            window.onYouTubeIframeAPIReady = function() {
                _this.player = new YT.Player(_this.$el.find('div').get(0), Backbone.$.extend({
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                }, options));
            }
            // The API will call this function when the video player is ready.
            window.onPlayerReady = function(e) {
                // broadcast video is ready
                Backbone.Mediator.publish('video-1:ready', e);
            }
            // The API calls this function when the player's state changes.
            // The function indicates that when playing a video (state=1),
            // the player should play for six seconds and then stop.
            window.onPlayerStateChange = function(e) {
                // broadcast video state change
                Backbone.Mediator.publish('video-1:stateChange', e);

                if (e.data === YT.PlayerState.PLAYING && !done) {
                    setTimeout(_this.eventStop, 6000);
                    done = true;
                }
            }
            /*eslint-enable */
        },
        //play the video
        eventPlay: function() {
            return this.player.playVideo();
        },
        //stop the video
        eventStop: function() {
            return this.player.stopVideo();
        },
        //Returns the duration in seconds of the currently playing video.
        getDuration: function() {
            return this.player.getDuration();
        },
        //Returns the YouTube.com URL for the currently loaded/playing video.
        getVideoUrl: function() {
            return this.player.getVideoUrl();
        },
        //Returns the embed code for the currently loaded/playing video.
        getVideoEmbedCode: function() {
            return this.player.getVideoEmbedCode();
        },
        getVideoData: function() {
            return this.player.getVideoData();
        }
    });
})();
