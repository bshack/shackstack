(function() {
    'use strict';
    const Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        initialize: function() {
            //load the api
            Backbone.$.ajax({
                url: 'https://www.youtube.com/iframe_api',
                dataType: 'script'
            });
            // This function creates an iframe (and YouTube player) after the API code downloads.
            this.el.onYouTubeIframeAPIReady = function(e) {
                Backbone.Mediator.publish('youtube-api-1:state:ready', e);
            }
        }
    });
})();
