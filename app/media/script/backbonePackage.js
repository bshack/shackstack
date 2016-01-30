(function() {
    'use strict';
    var _ = require('underscore');
    var Backbone = require('backbone');
    // don't use DELETE or PUT methods, make them POST methods
    Backbone.emulateHTTP = true;
    // send cookie data cross origin
    Backbone.$.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });
    // create an event bus
    Backbone.Messager = _.extend({}, Backbone.Events);
    // return our version of Backbone
    module.exports = Backbone;
})();
