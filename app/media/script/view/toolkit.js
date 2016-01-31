(function() {
    'use strict';
    var Backbone = require('../backbonePackage');
    var ModelEnvironment = require('../model/environment');
    var ViewModalOpen1 = require('./toolkit/modalOpen-1');
    var ViewTabpanel1 = require('./toolkit/tabpanel-1');
    var ViewAccessiblityAjax1 = require('./toolkit/accessiblityAjax-1');
    var templateModalDemo = require('../template/modal/demo');
    module.exports =  Backbone.View.extend({
        initialize: function() {
            // setup toolkit nav
            new ViewTabpanel1({
                el: Backbone.$('main')
            });
            // setup example tabpanel
            new ViewTabpanel1({
                el: Backbone.$('.tabpanel-1')
            });
            // setup example modal
            new ViewModalOpen1({
                el: Backbone.$('[data-modal-open]'),
                // set the content of the modal
                content: function(data) {
                    return Backbone.$(templateModalDemo(data));
                }
            });
            // setup the accessible ajax view
            var viewAccessiblityAjax1 = new ViewAccessiblityAjax1();
            var env = new ModelEnvironment();
            // on click get some example data and populate the container
            Backbone.$('#accessible-ajax-example-button').on('click', function() {
                var $this = Backbone.$(this);
                viewAccessiblityAjax1.request({
                    url: env.get('service') + 'service/toolkit.json',
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
                            .html(data.components['accessible-ajax'])
                            .focus();
                    }
                });
            });

        }
    });
})();
