(function() {
    'use strict';
    const Backbone = require('../../backbone/package');
    require('foundation-sites');
    module.exports = Backbone.View.extend({
        initialize: function() {
            //cache the body element for page height checking
            this.body = document.body;
            //sometimes you need to add some buffer here when you notice scrollDirection is not consistant.
            this.pixelBuffer = 0;
            //on init set viewport
            this.viewportSet();
            //message that window-1 is init
            Backbone.Mediator.publish('window:init', this.viewport);
        },
        events: {
            load: 'eventLoad',
            resize: 'eventResize',
            orientationchange: 'eventOrientationChange',
            scroll: 'eventScroll',
            keydown: 'eventKeydown',
            error: 'eventError'
        },
        subscriptions: {
            //force window to broadcast viewport data upon request
            'window:poll': 'viewportSet'
        },
        // this.viewport holds the current state of the window
        viewport: {
            height: false,
            width: false,
            scrollTop: false,
            scrollBottom: false,
            scrollDirection: false,
            scrollPercent: false,
            snappoint: false,
            orientation: false
        },
        eventError: function(message, url, line) {
            //sometimes message is an object
            if (typeof message === 'object') {
                message = 'no message (object)';
            }
            //report back script errors to metrics
            Backbone.Mediator.publish('metrics:event:send', {
                hitType: 'event',
                eventCategory: 'error',
                eventAction: 'script',
                eventLabel: (message || 'no message') + ' - ' + (url || 'no url') + ' - ' + (line || 'no line')
            });
        },
        eventKeydown: function(e) {
            //listen for excape key.. mostly used for modals
            if (e.keyCode === 27) {
                Backbone.Mediator.publish('window:keydown:escape');
            }
        },
        eventResize: function(e) {
            this.viewportSet(e);
            Backbone.Mediator.publish('window:resize:change', this.viewport);
        },
        eventScroll: function(e) {
            this.viewportSet(e);
            Backbone.Mediator.publish('window:scroll:change', this.viewport);
        },
        eventLoad: function(e) {
            this.viewportSet(e);
            Backbone.Mediator.publish('window:load', this.viewport);
        },
        eventOrientationChange: function(e) {
            this.viewportSet(e);
            Backbone.Mediator.publish('window:orientation:change', this.viewport);
        },
        viewportSet: function() {
            //cache the new position
            const newScrollTop = this.body.scrollTop;
            const newScrollTopBuffered = (newScrollTop + this.pixelBuffer);
            //check what direction the window is scrolling
            if (newScrollTopBuffered > this.viewport.scrollTop) {
                this.viewport.scrollDirection = 'down';
            } else if (newScrollTopBuffered < this.viewport.scrollTop) {
                this.viewport.scrollDirection = 'up';
            } else {
                this.viewport.scrollDirection = 'none';
            }
            //set the viewport width, height, scroll position
            this.viewport.width = this.el.innerWidth;
            this.viewport.height = this.el.innerHeight;
            this.viewport.scrollTop = newScrollTop;
            this.viewport.scrollBottom = (this.viewport.scrollTop + this.viewport.height);
            // percent of the page scrolled down
            this.viewport.scrollPercent = (this.viewport.scrollBottom / this.body.offsetHeight);
            //set orientation
            if (this.viewport.width > this.viewport.height) {
                this.viewport.orientation = 'landscape';
            } else {
                this.viewport.orientation = 'portrait';
            }
            //check if the snappoint has been set or if it has changed
            if (this.el.Foundation.MediaQuery.current !== this.viewport.snappoint || !this.viewport.snappoint) {
                this.viewport.snappoint = this.el.Foundation.MediaQuery.current;
                Backbone.Mediator.publish('window:snappoint:change', this.viewport);
            }
            //generic message if you want all events
            Backbone.Mediator.publish('window:change', this.viewport);
        }
    });
})();
