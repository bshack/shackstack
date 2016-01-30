(function() {
    'use strict';
    var Backbone = require('../backbonePackage');
    var $html = Backbone.$('html');
    module.exports = Backbone.Model.extend({
        defaults: {
            view: $html.attr('id') || '',
            www: $html.data('www'),
            cdn: $html.data('cdn'),
            service: $html.data('service')
        }
    });
})();
