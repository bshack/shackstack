(function() {
    'use strict';
    const Backbone = require('../../../backbone/package');
    const templateAccessibilitySpeaker1 = require('../../../template/toolkit/accessibility-speaker-1');
    module.exports = Backbone.View.extend({
        defaults: {
            speakDelay: 1500,
            cleanUpDelay: 10000
        },
        template: function(data) {
            // populate the template
            return Backbone.$(templateAccessibilitySpeaker1(data));
        },
        say: function(message, settings) {
            //create an new container just for this message
            const $speaker = this.template();
            //set the settings
            settings = Backbone.$.extend({}, this.defaults, settings);
            //add to the DOM
            this.$el
                .append($speaker);
            //wait a little bit so the screen reader reconizes any changes to the just added container
            window.setTimeout(function() {
                //insert the message into the container
                $speaker
                    .html(message);
                //wait a little bit to allow for the messages to be read completely from the container
                window.setTimeout(function() {
                    //clean up the container
                    $speaker
                        .remove();
                }, settings.cleanUpDelay);
            }, settings.speakDelay);
        }
    });
})();
