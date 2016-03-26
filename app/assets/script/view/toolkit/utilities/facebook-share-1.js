(function() {
    'use strict';
    const Backbone = require('../../../backbone/package');
    module.exports = Backbone.View.extend({
        share: function(params) {
            if (this.el.FB) {
                this.el.FB.ui({
                    method: 'feed',
                    name: (params.name || null),
                    link: (params.link || null),
                    picture: (params.picture || null),
                    caption: (params.caption || null),
                    description: (params.description || null)
                });
            }
        }
    });
})();
