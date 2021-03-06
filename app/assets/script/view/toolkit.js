(function() {
    'use strict';
    const Backbone = require('../backbone/package');
    const ModelEnvironment = require('../model/environment');
    const ViewAccessiblityAjax1 = require('./toolkit/utilities/accessiblity-ajax-1');
    const ViewPanels1 = require('./toolkit/components/panels-1');
    const ViewModalOpen1 = require('./toolkit/components/modal-open-1');
    const ViewTabpanel1 = require('./toolkit/components/tabpanel-1');
    const ViewForm1 = require('./toolkit/components/form-1');
    const ViewYouTube1 = require('./toolkit/components/youtube-player-1');
    const ViewSticky1 = require('./toolkit/components/sticky-1');
    const templateModalDemo = require('../template/modal/modal-example-1');
    const viewAccessiblityAjax1 = new ViewAccessiblityAjax1();
    const env = new ModelEnvironment();
    const $menuToggle = Backbone.$('header button');
    const $menu = Backbone.$('nav');
    module.exports =  Backbone.View.extend({
        initialize: function() {
            new ViewPanels1({
                el: Backbone.$('.panels-1')
            });
            // setup example form
            new ViewForm1({
                el: Backbone.$('.form-1'),
                isValid: function($form) {
                    window.console.log('form is valid', $form);
                }
            });
            // setup example tabpanels
            new ViewTabpanel1({
                el: Backbone.$('.tabpanel-1')
            });
            new ViewTabpanel1({
                el: Backbone.$('.tabpanel-2')
            });
            // setup example modal
            new ViewModalOpen1({
                el: Backbone.$('[data-modal-open]'),
                // set the content of the modal
                content: function(data) {
                    return Backbone.$(templateModalDemo(data));
                }
            });
            //setup video player
            new ViewYouTube1({
                el: Backbone.$('.youtube-player-1'),
                videoId: 'fJmADQkhUeo'
            });
            new ViewSticky1({
                el: Backbone.$('.sticky-1')
            });
        },
        events: {
            'click header button': 'eventMenuToggle',
            'click #accessible-ajax-example-button': 'eventAccessibleAjax'
        },
        subscriptions: {
            'window:keydown:escape': 'eventMenuToggle'
        },
        eventMenuToggle: function(e) {
            if ($menu.hasClass('mobile-show-menu')) {
                $menu
                    .removeClass('mobile-show-menu');
                $menuToggle
                    .attr('aria-expanded', false)
                    .focus();
                //send click event to metrics
                Backbone.Mediator.publish('metrics:event:send', {
                    hitType: 'event',
                    eventCategory: 'menu',
                    eventAction: 'close',
                    eventLabel: 'main menu mobile'
                });
            } else if (e && e.target.tagName === 'BUTTON') {
                $menuToggle
                    .attr('aria-expanded', true);
                $menu
                    .addClass('mobile-show-menu')
                    .focus();
                //send click event to metrics
                Backbone.Mediator.publish('metrics:event:send', {
                    hitType: 'event',
                    eventCategory: 'menu',
                    eventAction: 'open',
                    eventLabel: 'main menu mobile'
                });
            }
        },
        eventAccessibleAjax: function(e) {
            const $target = Backbone.$(e.target);
            // setup the accessible ajax view
            viewAccessiblityAjax1.request({
                url: env.get('service') + 'service/view/toolkit/components.json',
                success: function(data) {
                    // remove the previous container if present
                    Backbone.$('#accessible-ajax-example-content')
                        .remove();
                    // add new container with content
                    $target
                        .after('<div/>')
                        .next('div')
                        .attr('id', 'accessible-ajax-example-content')
                        .attr('tabindex', '-1')
                        // pull some text form a json object
                        .html(data['accessible-ajax-1'])
                        .focus();
                }
            });
        }
    });
})();
