(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        initialize: function(options) {
            // get all the panels in the panel group
            this.$panels = this.$el.find('> section');
            //set up the options
            this.options = Backbone.$.extend(this.options, options);
        },
        options: {
            // how far into view does the panel have to be to consider it active
            bufferPercent: 0.05,
            ease: true
        },
        subscriptions: {
            'window:change': 'eventWindowWatcher'
        },
        eventWindowWatcher: function(data) {
            // the index
            var i;
            // the current panel in the loop
            var $panel;
            // the previously active element
            var $activeOld = this.$el.find('> .active');
            // the new active element that will repace the previous active element
            var $activeNew;
            // the position if the panel when it should set it to active
            var activePosition;
            if (data.scrollDirection === 'down') {
                activePosition = data.scrollBottom - (data.height * this.options.bufferPercent);
            } else {
                activePosition = data.scrollBottom - (data.height * (1 - this.options.bufferPercent));
            }
            // loop over all the panels
            for (i = 0; i < this.$panels.length; i++) {
                //the the current panel in the loop
                $panel = Backbone.$(this.$panels[i]);
                // check to see if it is in view
                if ($panel.offset().top < activePosition) {
                    // set the new active element
                    $activeNew = $panel;
                    // save the index for metrics later
                    $activeNew.data('panelIndex', i);
                }
            }
            // check to see if the active element is not the same as the previous active element
            if ($activeNew && !$activeOld.is($activeNew)) {
                // set the new state of the previous active element
                $activeOld
                    .removeClass('active')
                    .addClass('viewed');
                // set the new state of the new active element
                $activeNew
                    .addClass('active');
                //scroll window to active element using easing
                if (this.options.ease) {
                    Backbone.Mediator.publish('window:trigger:scroll:y', {
                        scollToPosition: $activeNew,
                        speed: 1,
                        easing: 'easeInOutQuint'
                    });
                }
                //on the first time this panel becomes active
                if (!$activeNew.hasClass('viewed')) {
                    //message that panel changed
                    Backbone.Mediator.publish('panel-1:event:active', $activeNew);
                    //log a panel view in metrics
                    Backbone.Mediator.publish('metrics:event:send', {
                        hitType: 'event',
                        eventCategory: 'panels',
                        eventAction: 'view',
                        eventLabel: 'panel - ' + ($activeNew.data('panelIndex') + 1).toString()
                    });
                }
            }
        }
    });
})();
