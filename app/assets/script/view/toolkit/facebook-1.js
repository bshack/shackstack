(() => {
    'use strict';
    const Backbone = require('../../backbone/package');
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
