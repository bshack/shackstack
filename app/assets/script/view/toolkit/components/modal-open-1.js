(function() {
    'use strict';
    const Backbone = require('../../../backbone/package');
    const ViewModal1 = require('./modal-1');
    const templateModal1 = require('../../../template/toolkit/modal-1');
    module.exports = Backbone.View.extend({
        initialize: function(options) {
            this.content = (options.content || false);
            //ask window top publish its status
            Backbone.Mediator.publish('window:poll');
        },
        events: {
            'click': 'render'
        },
        subscriptions: {
            'window:change': 'eventWindowWatcher'
        },
        eventWindowWatcher: function(data) {
            this.parentViewport = data;
        },
        template: function(data) {
            // populate the wrapper modal template
            return Backbone.$(templateModal1(data));
        },
        templateInner: function(data) {
            if (this.content) {
                // populate the modal with content provided
                return this.content(data);
            } else {
                // or just populate with an empty div
                return Backbone.$('<div/>');
            }
        },
        render: function(e) {
            e.preventDefault();
            //cache current scroll position
            const windowScrollPosition = this.parentViewport.scrollTop;
            // the opener
            const $target = Backbone.$(e.target);
            // build the modal markup
            const $modal = this.template();
            // check what viewport we are in and set the position correctly
            let modalScrollPosition;
            if (this.parentViewport.snappoint === 'small') {
                modalScrollPosition = 0;
            } else {
                modalScrollPosition = windowScrollPosition;
            }
            // setup the modal
            $modal
                .css('top', modalScrollPosition)
                .find('.modal-1-content')
                .html(this.templateInner());
            // bind the events
            new ViewModal1({
                el: $modal
            });
            //add to dom
            Backbone.$('body')
                .addClass('modal-1-open')
                .prepend($modal);
            //put focus on the modal and cache the opening element and window position
            $modal
                .find('.modal-1-content')
                .focus()
                .data('opener', $target)
                .data('windowScrollPosition', windowScrollPosition);
            //send click event to metrics
            Backbone.Mediator.publish('metrics:event:send', {
                hitType: 'event',
                eventCategory: 'modal',
                eventAction: 'open',
                eventLabel: $target.data('modal-open')
            });
        }
    });
})();
