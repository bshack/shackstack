(function() {
    'use strict';
    var Backbone = require('../../backbonePackage');
    module.exports = Backbone.View.extend({
        events: {
            'click > [role=tablist] [role=tab]': 'tabClick',
            'keydown > [role=tablist] [role=tab]': 'tabKeydown'
        },
        tabClick: function(e) {
            e.preventDefault();
            var $target = Backbone.$(e.target);
            this.$el
                .find('> [role=tablist] [role=tab]')
                .attr('aria-selected', false)
                .attr('tabindex', -1);
            $target
                .attr('aria-selected', true)
                .removeAttr('tabindex');
            this.$el
                .find('> [role=tabpanel]')
                .attr('aria-hidden', true)
                .attr('tabindex', -1);
            this.$el
                .find('#' + $target.attr('aria-controls'))
                .attr('aria-hidden', false)
                .removeAttr('tabindex');
        },
        tabKeydown: function(e) {
            var $target = Backbone.$(e.target);
            if (e.which === 13) {
                e.preventDefault();
                $target
                    .click();
            } else if (e.which === 32) {
                e.preventDefault();
                if ($target.attr('aria-selected') === true) {
                    this.$el.find('> [role=tablist]')
                        .find('[aria-selected=false]')
                        .attr('aria-selected', true)
                        .removeAttr('tabindex')
                        .focus();
                    $target
                        .attr('aria-selected', false)
                        .attr('tabindex', -1);
                    this.$el.find('> [role=tabpanel]')
                        .attr('aria-hidden', true)
                        .attr('tabindex', -1);
                    this.$el
                        .find('#' + this.$el.find('> [role=tablist] [aria-selected=true]')
                        .attr('aria-controls'))
                        .attr('aria-hidden', false)
                        .removeAttr('tabindex');
                }
            }
        }
    });
})();
