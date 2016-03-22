(() => {
    'use strict';
    const Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        events: {
            'click > [role=tablist] [role=tab]': 'tabClick',
            'keydown > [role=tablist] [role=tab]': 'tabKeydown'
        },
        // for non screen reader users
        tabClick: function(e) {
            e.preventDefault();
            const $target = Backbone.$(e.target);
            //send click event to metrics
            Backbone.Mediator.publish('metrics:event:send', {
                hitType: 'event',
                eventCategory: 'tabpanel',
                eventAction: 'click',
                eventLabel: $target.text()
            });
            // deselect all the tabs
            this.$el
                .find('> [role=tablist] [role=tab]')
                .attr('aria-selected', false)
                .attr('tabindex', -1);
            // select the tab click on
            $target
                .attr('aria-selected', true)
                .attr('tabindex', 0);
            // deselect all the panels
            this.$el
                .find('[role=tabpanel]')
                .attr('aria-hidden', true)
                .attr('tabindex', -1);
            // select the panel associated with the tab clicked on
            this.$el
                .find('#' + $target.attr('aria-controls'))
                .attr('aria-hidden', false)
                .removeAttr('tabindex');
        },
        tabKeydown: function(e) {
            const $target = Backbone.$(e.target);
            // if left arrow key
            if (e.which === 37) {
                if ($target.prev('[role=tab]').size()) {
                    $target.prev('[role=tab]')
                        .focus()
                        .trigger('click');
                } else {
                    $target.prev('[role=tabpanel]').prev('[role=tab]')
                        .focus()
                        .trigger('click');
                }
            // if right arrow key
            } else if (e.which === 39) {
                if ($target.next('[role=tab]').size()) {
                    $target.next('[role=tab]')
                        .focus()
                        .trigger('click');
                } else {
                    $target.next('[role=tabpanel]').next('[role=tab]')
                        .focus()
                        .trigger('click');
                }
            }
        }
    });
})();
