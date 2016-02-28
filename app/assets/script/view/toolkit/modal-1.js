(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        initialize: function() {
            //ask window top publish its status
            Backbone.Mediator.publish('window:poll');
        },
        events: {
            'click [data-modal-close]': 'eventCloseModalClick',
            'focus > button': 'eventKeyboardFocus'
        },
        subscriptions: {
            'window:keydown:escape': 'eventCloseModal',
            'window:snappoint:change': 'eventSnappointChange'
        },
        //watch snappoint and move modal around as it changes
        eventSnappointChange: function(data) {
            var scrollTop;
            if (data.snappoint === 'small') {
                scrollTop = 0;
            } else {
                scrollTop = this.$el.data('windowScrollPosition');
            }
            this.$el
                .css('top', scrollTop);
        },
        eventCloseModalClick: function(e) {
            e.preventDefault();
            this.eventCloseModal();
        },
        eventKeyboardFocus: function() {
            this.$el.find('.modal-1-content').focus();
        },
        eventCloseModal: function() {
            if (!Backbone.$('[data-modal]').size()) {
                return;
            }
            // cache the element that lauched the modal
            this.$opener = this.$el.find('.modal-1-content').data('opener');
            // allow scrolling again
            Backbone.$('body')
                .removeClass('modal-1-open');
            // remove it from the screen
            this.$el
                .detach();
            // scroll to previous position
            Backbone.$(window)
                .scrollTop(this.$el.data('windowScrollPosition'));
            // focus on the element that originally opened the modal
            this.$opener
                .focus();
            //send click event to metrics
            Backbone.Mediator.publish('metrics:event:send', {
                hitType: 'event',
                eventCategory: 'modal',
                eventAction: 'close',
                eventLabel: this.$opener.data('modal-open')
            });
        }
    });
})();
