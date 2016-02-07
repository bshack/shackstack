(function() {
    'use strict';
    var Backbone = require('backbone');
    require('./mediator');
    // don't use DELETE or PUT methods, make them POST methods
    Backbone.emulateHTTP = true;
    // send cookie data cross origin
    Backbone.$.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });
    // return the extended version of Backbone
    module.exports = Backbone;
})();
