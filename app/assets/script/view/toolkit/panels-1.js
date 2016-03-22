(function() {
    'use strict';
    const Backbone = require('../../backbone/package');
    const modernizr = require('modernizr');
    module.exports = Backbone.View.extend({
        initialize: function() {
            // get all the panels in the panel group
            this.$panels = this.$el.find('> .panel');
            //disabled fixed panels
            if (modernizr.touchevents) {
                this.$el.addClass('panel-scrollable-disabled');
            }
        },
        subscriptions: {
            'window:change': 'eventWindowWatcher'
        },
        panelViewedState: {},
        eventWindowWatcher: function(data) {
            // this will hold all the panel states
            let panelStates = [];
            // this will hold one panel state
            let panelState;
            // the index
            let i;
            // the current panel in the loop
            let $panel;
            // how far the top of the panel is from the page top
            let panelOffsetTop;
            // how tall the panel is
            let panelHeight;
            // unique name for metrics logging
            let panelMetricsName;
            // what percent of the panel is visible on screen
            let precentInView;
            // loop over all the panels
            for (i = 0; i < this.$panels.length; i++) {
                //the the current panel in the loop
                $panel = this.$panels.eq(i);
                //cache the offset
                panelOffsetTop = $panel.offset().top;
                //cache the height
                panelHeight = $panel.height();
                //create a metrics name
                panelMetricsName = 'panel - ' + (i + 1).toString();
                // set to empty object
                panelState = {};
                // check if has been viewed
                if (this.panelViewedState[i] === true) {
                    panelState.hasBeenViewed = true;
                } else {
                    panelState.hasBeenViewed = false;
                }
                // if the panel is in complete or partial view
                if (panelOffsetTop <= data.scrollBottom && panelOffsetTop + panelHeight >= data.scrollTop) {
                    //determine what percent it is in view
                    precentInView = ((data.scrollBottom - panelOffsetTop) / 2) / panelHeight;
                    //set a class that it is in view
                    $panel
                        .addClass('panel-in-view panel-viewed')
                    //set in data that it is in view
                    panelState.inView = true;
                    // if the top edge is in in view you are entering the panel
                    if (precentInView <= .5) {
                        panelState.percent = precentInView;
                    // if the bottom edge is in view your are leaving the panel
                    } else {
                        panelState.percent = precentInView;
                    }
                    //check to see if the metric tag was logged
                    if (!panelState.hasBeenViewed) {
                        Backbone.Mediator.publish('metrics:event:send', {
                            hitType: 'event',
                            eventCategory: 'panels',
                            eventAction: 'view',
                            eventLabel: panelMetricsName
                        });
                        this.panelViewedState[i] = true;
                    }
                    // check it this is a scrollable panel
                    if (!modernizr.touchevents && $panel.hasClass('panel-scrollable')) {
                        //send if panel is scrollable
                        panelState.scrollable = true;
                        // set to fixed once the top edge if above the window top
                        if (panelOffsetTop <= data.scrollTop && panelOffsetTop + panelHeight >= data.scrollBottom) {
                            $panel
                                .addClass('panel-scrollable-fixed')
                                .removeClass('panel-scrollable-bottom');
                        // set to bottom once the bottom is above the window bottom
                        } else if (panelOffsetTop + panelHeight <= data.scrollBottom) {
                            $panel
                                .removeClass('panel-scrollable-fixed')
                                .addClass('panel-scrollable-bottom');
                        // default state
                        } else {
                            $panel
                                .removeClass('panel-scrollable-fixed panel-scrollable-bottom');
                        }

                    } else {
                        //send if panel is scrollable
                        panelState.scrollable = false;
                    }
                // the panel is not in view
                } else {
                    //remove in view class if present
                    $panel
                        .removeClass('panel-in-view');
                    //set in data that it is out of view
                    panelState.inView = false;
                }
                panelStates.push(panelState);
            }
            //message out the current panel states
            Backbone.Mediator.publish('panels-1:event:change', panelStates);
        }
    });
})();
