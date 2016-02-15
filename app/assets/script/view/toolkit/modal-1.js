(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        events: {
            'click [data-modal-close]': 'closeModalClick'
        },
        subscriptions: {
            'window:keydown:escape': 'closeModal'
        },
        closeModalClick: function(e) {
            e.preventDefault();
            this.closeModal();
        },
        closeModal: function() {
            if (!Backbone.$('[data-modal]').size()) {
                return;
            }
            // cache the element that lauched the modal
            this.$opener = this.$el.data('opener');
            // show all the page content
            Backbone.$('body > *')
                .not('script, [data-modal]')
                .removeAttr('hidden');
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
