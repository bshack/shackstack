(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        initialize: function() {
            var done = false;
            //load the api
            Backbone.$.ajax({
                url: 'https://www.youtube.com/iframe_api',
                dataType: 'script'
            });
            // This function creates an iframe (and YouTube player) after the API code downloads.
            this.el.onYouTubeIframeAPIReady = function(e) {
                Backbone.Mediator.publish('youtube-api-1:state:ready', e);
            }
            // The API will call this function when the video player is ready.
            this.el.onPlayerReady = function(e) {
                // broadcast video is ready
                Backbone.Mediator.publish('youtube-player-1:state:ready', e);
            }
            // The API calls this function when the player's state changes.
            // The function indicates that when playing a video (state=1),
            // the player should play for six seconds and then stop.
            this.el.onPlayerStateChange = function(e) {
                // broadcast video state change
                Backbone.Mediator.publish('youtube-player-1:state:changed', e);
                // broadcast video playing
                if (e.data === 1) {
                    Backbone.Mediator.publish('youtube-player-1:state:playing', e);
                }
                // broadcast video paused
                if (e.data === 2) {
                    Backbone.Mediator.publish('youtube-player-1:state:paused', e);
                }
                /*eslint-disable */
                if (e.data === YT.PlayerState.PLAYING && !done) {
                    setTimeout(e.target.stopVideo, 6000);
                    done = true;
                }
                /*eslint-enable */
            }
        }
    });
})();
