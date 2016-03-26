(function() {
    'use strict';
    const Backbone = require('../../../backbone/package');
    module.exports = Backbone.View.extend({
        initialize: function() {
            const _this = this,
                fjs = document.getElementsByTagName('script')[0];
            let js;
            if (document.getElementById('facebook-jssdk')) {
                return;
            }
            js = document.createElement('script');
            js.id = 'facebook-jssdk';
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
            this.el.fbAsyncInit = function() {
                _this.el.FB.init({
                    appId: _this.model.get('fbAppId'),
                    xfbml: true,
                    version: 'v2.5'
                });
                //message that the api is ready
                Backbone.Mediator.publish('facebook-api-1:state:ready');
            };
        }
    });
})();
