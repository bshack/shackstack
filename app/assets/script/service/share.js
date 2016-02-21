(function() {
    'use strict';
    module.exports = {
        shareFacebook: function(params) {
            return 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(params.url);
        },
        shareTwitter: function(params) {
            if (params.text.length <= 140) {
                return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(params.text);
            } else {
                return false;
            }
        },
        shareGooglePlus: function(params) {
            return 'https://plus.google.com/share?url=' + encodeURIComponent(params.url);
        },
        shareLinkedIn: function(params) {
            return 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(params.url);
        },
        shareEmail: function(params) {
            return 'mailto:?subject=' + encodeURIComponent(params.subject) + 'body=' + encodeURIComponent(params.body);
        }
    };
})();
