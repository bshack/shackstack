(function() {
    'use strict';
    var Backbone = require('backbone');
    // pull in the mediator
    require('backbone_mediator');
    // don't use DELETE or PUT methods, make them POST methods
    Backbone.emulateHTTP = true;
    // send cookie data cross origin
    Backbone.$.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });
    // return the extended version of Backbone
    window.Backbone = Backbone;
    module.exports = Backbone;
})();
