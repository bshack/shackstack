(function() {
    'use strict';
    var Backbone = require('../../backbonePackage');
    module.exports = Backbone.View.extend({
        events: {
            load: 'viewportSetEvent',
            resize: 'viewportSetEvent',
            orientationchange: 'viewportSetEvent',
            scroll: 'viewportSetEvent',
            keydown: 'keydownEvent'
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
                Backbone.Messager.trigger('window:keydown:escape');
            }
        },
        //force refresh for viewport cache
        viewportRefresh: function() {
            this.viewportSet(true);
        },
        viewportSetEvent: function() {
            this.viewportSet(false);
        },
        viewportSet: function(clearCache) {
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
                Backbone.Messager.trigger('window:viewport:desktop', _this.viewport);
            //mobile check
            } else if (
                this.viewport.width < 640 &&
                (this.viewport.view === 'desktop' || !this.viewport.view || clearCache)
            ) {
                this.viewport.view = 'mobile';
                //message to other views the viewport has changed to mobile
                Backbone.Messager.trigger('window:viewport:mobile', _this.viewport);
            }
            //message to other views the viewport has been changed
            Backbone.Messager.trigger('window:viewport:change', _this.viewport);
        },
        initialize: function() {
            Backbone.Messager.bind('window:viewport:refresh', this.viewportRefresh, this);
            //on init set viewport
            this.viewportSet(false);
        }
    });
})();