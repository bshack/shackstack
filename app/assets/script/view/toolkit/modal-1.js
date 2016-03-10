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
            var scrollTopPosition;
            if (data.snappoint === 'small') {
                scrollTopPosition = 0;
            } else {
                scrollTopPosition = this.$el.find('.modal-1-content').data('windowScrollPosition');
            }
            this.$el
                .css('top', scrollTopPosition);
            Backbone.$(window)
                .scrollTop(scrollTopPosition);
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
            var $data = this.$el.find('.modal-1-content').data();
            // allow scrolling again
            Backbone.$('body')
                .removeClass('modal-1-open');
            // remove it from the screen
            this.$el
                .detach();
            // scroll to previous position
            Backbone.$(window)
                .scrollTop($data.windowScrollPosition);
            // focus on the element that originally opened the modal
            $data.opener
                .focus();
            //send click event to metrics
            Backbone.Mediator.publish('metrics:event:send', {
                hitType: 'event',
                eventCategory: 'modal',
                eventAction: 'close',
                eventLabel: $data.opener.data('modal-open')
            });
        }
    });
})();
