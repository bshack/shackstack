(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    var ModelEnvironment = require('../../model/environment');
    var env = new ModelEnvironment();
    module.exports = Backbone.View.extend({
        initialize: function() {
            var js, fjs = document.getElementsByTagName('script')[0];
            if (document.getElementById('facebook-jssdk')) {return;}
            js = document.createElement('script'); js.id = 'facebook-jssdk';
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
            window.fbAsyncInit = function() {
                window.FB.init({
                    appId: env.get('fbAppId'),
                    xfbml: true,
                    version: 'v2.5'
                });
            };
        }
    });
})();
