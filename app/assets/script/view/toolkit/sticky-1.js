(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        subscriptions: {
            'window:change': 'eventWindowWatcher'
        },
        eventWindowWatcher: function(data) {
            var i;
            for (i = 0; i < this.$el.length; i++) {
                if (data.scrollTop >= this.$el.eq(i).offset().top) {
                    this.$el.eq(i).addClass('sticky-1-fixed');
                } else {
                    this.$el.eq(i).removeClass('sticky-1-fixed');
                }
            }
        }
    });
})();
