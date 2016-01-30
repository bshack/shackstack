(function() {
    'use strict';
    var Backbone = require('../../backbonePackage');
    var AccessiblitySpeaker1 = require('./accessiblitySpeaker-1');
    module.exports = Backbone.View.extend({
        initialize: function() {
            this.accessiblitySpeaker1 = new AccessiblitySpeaker1({
                el: Backbone.$('body')
            });
        },
        //usage is the same as regular jquery ajax, adding some messaging on top
        request: function(params) {
            var _this = this;
            //message to screen readers that an ajax request is now pending
            _this.accessiblitySpeaker1.say('content is loading');
            //cache it because we are about to redefine it
            var successCallback = params.success;
            //redefine success callback to add screen reader messaging
            params.success = function(data) {
                //tell screen readers ajax request is complete
                _this.accessiblitySpeaker1.say('content has loaded');
                //run the sucess defined callback
                if (successCallback) {
                    successCallback(data);
                }
            };
            Backbone.$.ajax(params);
        }
    });
})();
