(function() {
    'use strict';
    const Backbone = require('../../../backbone/package');
    const easingJS = require('easingjs');
    //https://github.com/bshack/easingjs
    module.exports = Backbone.View.extend({
        initialize: function() {
        },
        subscriptions: {
            'window:change': 'eventWindowWatcher',
            'window:trigger:scroll:y': 'scrollToY'
        },
        eventWindowWatcher: function(data) {
            this.viewport = data;
        },
        defaults: {
            scollToPosition: 0,
            speed: 2000,
            easing: 'easeOutSine'
        },
        easingEquations: easingJS,
        tick: function(currentTime, time, settings) {
            currentTime += 1 / 60;
            const _this = this;
            const position = currentTime / time;
            const t = this.easingEquations[settings.easing](position);
            if (position < 1) {
                this.el.requestAnimationFrame(function() {
                    _this.tick(currentTime, time, settings);
                });
                this.el.scrollTo(0, this.viewport.scrollTop + (
                    (settings.scollToPosition - this.viewport.scrollTop) * t));
            } else {
                this.el.scrollTo(0, settings.scollToPosition);
            }
        },
        scrollToY: function(settings) {
            // determine settings
            settings = Backbone.$.extend({}, this.defaults, settings);
            // if an element was passed in then scroll to it
            if (typeof settings.scollToPosition !== 'number') {
                settings.scollToPosition = Backbone.$(settings.scollToPosition).first().offset().top;
            }
            // min time .1, max time .8 seconds
            const time = Math.max(
                0.1,
                Math.min(Math.abs(this.viewport.scrollTop - settings.scollToPosition) / settings.speed, 0.8)
            );
            // call it once to get started
            this.tick(0, time, settings);
        }
    });
})();
