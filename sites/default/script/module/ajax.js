define(['jquery'], function($) {
    'use strict';
    return (function() {
        var post = function(params, callback) {
            $.post('/service/', params, callback);
        };
        return {
            'post': post
        };
    })();
});
