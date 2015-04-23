define([
    'jquery',
    'handlebars',
    'compiledTemplates/compiled',
    'compiledTemplates/compiledEmber'
], function($, Handlebars) {
    'use strict';
    return (function() {
        //make all templates also partials
        Handlebars.partials = window.JST;
        //return markup from template
        var getMarkup = function(template, data) {
            return window.JST[template](data);
        };
        return {
            'getMarkup': getMarkup
        };
    })();
});
