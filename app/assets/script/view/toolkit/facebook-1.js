(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    module.exports = Backbone.View.extend({
        initialize: function() {
            var _this = this,
                js,
                fjs = document.getElementsByTagName('script')[0];
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
            };
        },
        // fb share
        share: function(params) {
            this.el.FB.ui({
                method: 'feed',
                name: (params.name || null),
                link: (params.link || null),
                picture: (params.picture || null),
                caption: (params.caption || null),
                description: (params.description || null)
            });
        }
    });
})();
