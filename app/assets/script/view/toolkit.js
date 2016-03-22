(() => {
    'use strict';
    const Backbone = require('../backbone/package');
    const ModelEnvironment = require('../model/environment');
    const ViewPanels1 = require('./toolkit/panels-1');
    const ViewModalOpen1 = require('./toolkit/modal-open-1');
    const ViewTabpanel1 = require('./toolkit/tabpanel-1');
    const ViewAccessiblityAjax1 = require('./toolkit/accessiblity-ajax-1');
    const ViewForm1 = require('./toolkit/form-1');
    const ViewYouTube1 = require('./toolkit/youtube-player-1');
    const templateModalDemo = require('../template/modal/modal-example-1');
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
            // setup the accessible ajax view
            const viewAccessiblityAjax1 = new ViewAccessiblityAjax1();
            const env = new ModelEnvironment();
            // on click get some example data and populate the container.. TODO make this a self contained view
            Backbone.$('#accessible-ajax-example-button').on('click', function() {
                const $this = Backbone.$(this);
                viewAccessiblityAjax1.request({
                    url: env.get('service') + 'service/view/toolkit/components.json',
                    success: function(data) {
                        // remove the previous container if present
                        Backbone.$('#accessible-ajax-example-content')
                            .remove();
                        // add new container with content
                        $this
                            .after('<div/>')
                            .next('div')
                            .attr('id', 'accessible-ajax-example-content')
                            .attr('tabindex', '-1')
                            // pull some text form a json object
                            .html(data['accessible-ajax-1'])
                            .focus();
                    }
                });
            });

        }
    });
})();
