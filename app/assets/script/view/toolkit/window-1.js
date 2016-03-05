(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        initialize: function() {
            //on init set viewport
            this.viewportSet();
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
            var snappointChange = false;
            var newScrollTop = this.$el.scrollTop();
            //sometimes you need to add some buffer here when you notice scrollDirection is not consistant.
            var pixelbuffer = 0;
            //check what direction the window is scrolling
            if (newScrollTop + pixelbuffer > this.viewport.scrollTop) {
                this.viewport.scrollDirection = 'down';
            } else if (newScrollTop + pixelbuffer < this.viewport.scrollTop) {
                this.viewport.scrollDirection = 'up';
            } else {
                this.viewport.scrollDirection = 'none';
            }
            //set the viewport width, height, scroll position
            this.viewport.width = this.$el.width();
            this.viewport.height = this.$el.height();
            this.viewport.scrollTop = newScrollTop;
            this.viewport.scrollBottom = (this.viewport.scrollTop + this.viewport.height);
            //set orientation
            if (this.el.matchMedia('(orientation: landscape)').matches) {
                this.viewport.orientation = 'landscape';
            } else {
                this.viewport.orientation = 'portrait';
            }
            //check if the snappoint has been set or if it has changed
            if (this.el.Foundation.MediaQuery.current !== this.viewport.snappoint || !this.viewport.snappoint) {
                this.viewport.snappoint = this.el.Foundation.MediaQuery.current;
                snappointChange = true;
            }
            //publish the changes
            //snappoint change
            if (snappointChange) {
                Backbone.Mediator.publish('window:snappoint:change', this.viewport);
            }
            //generic message if you want all events
            Backbone.Mediator.publish('window:change', this.viewport);
        }
    });
})();
