(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        events: {
            'click > [role=tablist] [role=tab]': 'tabClick',
            'keydown > [role=tablist] [role=tab]': 'tabKeydown'
        },
        // for non screen reader users
        tabClick: function(e) {
            e.preventDefault();
            var $target = Backbone.$(e.target);
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
                .removeAttr('tabindex');
            // deselect all the panels
            this.$el
                .find('> [role=tabpanel]')
                .attr('aria-hidden', true)
                .attr('tabindex', -1);
            // select the panel associated with the tab clicked on
            this.$el
                .find('#' + $target.attr('aria-controls'))
                .attr('aria-hidden', false)
                .removeAttr('tabindex');
        },
        tabKeydown: function(e) {
            var $target = Backbone.$(e.target);
            // if spacebar key hit just trigger a click
            if (e.which === 32) {
                $target
                    .click();
            // if left arrow key
            } else if (e.which === 37) {
                $target.parent('li').prev().find('button').focus().trigger('click');
            // if right arrow key
            } else if (e.which === 39) {
                $target.parent('li').next().find('button').focus().trigger('click');
            }
        }
    });
})();
