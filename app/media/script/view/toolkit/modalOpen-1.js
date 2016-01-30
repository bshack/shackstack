(function() {
    'use strict';
    var Backbone = require('../../backbonePackage');
    var ViewModal1 = require('./modal-1');
    var templateModal1 = require('../../template/toolkit/modal-1');
    module.exports = Backbone.View.extend({
        initialize: function(options) {
            this.content = (options.content || false);
        },
        events: {
            'click': 'render'
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
            // build the modal markup
            var $modal = this.template().html(this.templateInner());
            // bind the events
            new ViewModal1({
                el: $modal
            });
            //add to dom
            Backbone.$('body')
                .prepend($modal);
            // hide page content
            Backbone.$('body > *')
                .not('script, [data-modal]')
                .attr('hidden', 'hidden');
            //put focuse on the modal and cache the opening element
            $modal
                .focus()
                .data('opener', Backbone.$(e.target));
        }
    });
})();
