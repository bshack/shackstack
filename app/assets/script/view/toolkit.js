(function() {
    'use strict';
    var Backbone = require('../backbone/package');
    var ModelEnvironment = require('../model/environment');
    var ViewPanels1 = require('./toolkit/panels-1');
    var ViewModalOpen1 = require('./toolkit/modal-open-1');
    var ViewTabpanel1 = require('./toolkit/tabpanel-1');
    var ViewAccessiblityAjax1 = require('./toolkit/accessiblity-ajax-1');
    var ViewForm1 = require('./toolkit/form-1');
    var ViewYouTube1 = require('./toolkit/youtube-player-1');
    var ViewSticky1 = require('./toolkit/sticky-1');
    var templateModalDemo = require('../template/modal/modal-example-1');
    var viewAccessiblityAjax1 = new ViewAccessiblityAjax1();
    var env = new ModelEnvironment();
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
            'click header button': 'eventMenuOpen',
            'click #accessible-ajax-example-button': 'eventAccessibleAjax'
        },
        eventMenuOpen: function() {
            Backbone.$('nav ul').toggleClass('mobile-show-menu');
        },
        eventAccessibleAjax: function(e) {
            var $target = Backbone.$(e.target);
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
