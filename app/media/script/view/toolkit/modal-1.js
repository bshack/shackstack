(function() {
    'use strict';
    var Backbone = require('../../backbonePackage');
    module.exports = Backbone.View.extend({
        initialize: function() {
            Backbone.Messager.bind('window:keydown:escape', this.closeModal, this);
        },
        events: {
            'click [data-modal-close]': 'closeModalClick'
        },
        closeModalClick: function(e) {
            e.preventDefault();
            this.closeModal();
        },
        closeModal: function() {
            // cache the element that lauched the modal
            this.$opener = this.$el.data('opener');
            // show all the page content
            Backbone.$('body > *')
                .not('script, [data-modal]')
                .removeAttr('hidden');
            // remove the modal
            this.$el
                .detach();
            // focus on the element that originally opened the modal
            this.$opener
                .focus();
        }
    });
})();
