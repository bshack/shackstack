(() => {
    'use strict';
    const Backbone = require('../../backbone/package');
    const AccessiblitySpeaker1 = require('./accessiblity-speaker-1');
    module.exports = Backbone.View.extend({
        initialize: function() {
            this.accessiblitySpeaker1 = new AccessiblitySpeaker1({
                el: Backbone.$('body')
            });
        },
        //usage is the same as regular jquery ajax, adding some messaging on top
        request: function(params) {
            const _this = this;
            //cache it because we are about to redefine it
            const successCallback = params.success;
            const errorCallback = params.error;
            //redefine success callback to add screen reader messaging
            params.success = function(data, textStatus, jqXHR) {
                //tell screen readers ajax request is complete
                _this.accessiblitySpeaker1.say('content has loaded');
                //send click event to metrics
                Backbone.Mediator.publish('metrics:event:send', {
                    hitType: 'event',
                    eventCategory: 'ajax',
                    eventAction: 'request',
                    eventLabel: params.url
                });
                //run the sucess defined callback
                if (successCallback) {
                    successCallback(data, textStatus, jqXHR);
                }
            };
            params.error = function(jqXHR, textStatus, errorThrown) {
                //tell screen readers ajax request is complete
                _this.accessiblitySpeaker1.say('Sorry there was an error, your content has not loaded.');
                //report back ajax errors to metrics
                Backbone.Mediator.publish('metrics:event:send', {
                    hitType: 'event',
                    eventCategory: 'error',
                    eventAction: 'ajax',
                    eventLabel: (textStatus || 'no text status') + ' - ' + (errorThrown || 'no error thrown')
                });
                //run the sucess defined callback
                if (errorCallback) {
                    errorCallback(jqXHR, textStatus, errorThrown);
                }
            };
            //message to screen readers that an ajax request is now pending
            _this.accessiblitySpeaker1.say('content is loading');
            //make the request
            Backbone.$.ajax(params);
        }
    });
})();
