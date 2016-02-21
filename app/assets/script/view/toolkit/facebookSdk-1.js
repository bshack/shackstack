(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        initialize: function() {
            var _this = this;
            var js, fjs = document.getElementsByTagName('script')[0];
            if (document.getElementById('facebook-jssdk')) {return;}
            js = document.createElement('script'); js.id = 'facebook-jssdk';
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
            window.fbAsyncInit = function() {
                window.FB.init({
                    appId: _this.model.get('fbAppId'),
                    xfbml: true,
                    version: 'v2.5'
                });
            };
        }
    });
})();
