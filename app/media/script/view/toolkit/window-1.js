(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        events: {
            load: 'viewportSet',
            resize: 'viewportSet',
            orientationchange: 'viewportSet',
            scroll: 'viewportSet',
            keydown: 'keydownEvent'
        },
        // subscribe to pub/sub messaging
        subscriptions: {
            'window:viewport:refresh': 'viewportRefresh'
        },
        // this.viewport holds the current state of the window
        viewport: {
            height: false,
            width: false,
            scrollTop: false,
            view: false,
            orientation: false
        },
        keydownEvent: function(e) {
            //listen for excape key.. mostly used for modals
            if (e.keyCode === 27) {
                Backbone.Mediator.publish('window:keydown:escape');
            }
        },
        //force refresh for viewport cache
        viewportRefresh: function() {
            this.viewportSet(true);
        },
        viewportSet: function(clearCache) {
            //this is mainly used to control
            //placing the 'hidden' attribute for accessiblity
            //where display: none; is not enough
            var _this = this;
            //set the viewport width, height, scroll position
            this.viewport.width = this.$el.width();
            this.viewport.height = this.$el.height();
            this.viewport.scrollTop = this.$el.scrollTop();
            //set orientation
            if (this.$el.get(0).matchMedia('(orientation: landscape)').matches) {
                this.viewport.orientation = 'landscape';
            } else {
                this.viewport.orientation = 'portrait';
            }
            //check if the viewport has been set or if it has changed
            //desktop check
            if (
                this.viewport.width >= 640 &&
                (this.viewport.view === 'mobile' || !this.viewport.view || clearCache)
            ) {
                this.viewport.view = 'desktop';
                //message to other views the viewport has changed to desktop
                Backbone.Mediator.publish('window:viewport:desktop', _this.viewport);
            //mobile check
            } else if (
                this.viewport.width < 640 &&
                (this.viewport.view === 'desktop' || !this.viewport.view || clearCache)
            ) {
                this.viewport.view = 'mobile';
                //message to other views the viewport has changed to mobile
                Backbone.Mediator.publish('window:viewport:mobile', _this.viewport);
            }
            //message to other views the viewport has been changed
            Backbone.Mediator.publish('window:viewport:change', _this.viewport);
        },
        initialize: function() {
            //on init set viewport
            this.viewportSet();
        },
        render: function() {
            return;
        }
    });
})();
