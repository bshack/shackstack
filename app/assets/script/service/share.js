(function() {
    'use strict';
    module.exports = {
        shareFacebookUrl: function(params) {
            return 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(params.url);
        },
        shareTwitterUrl: function(params) {
            //check if the message is the right size and that a message is definded
            if (params.text && params.text.length <= 140) {
                var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(params.text);
                // check if they passed in an url along with the message
                if (params.url) {
                    url = url + '&url=' + encodeURIComponent(params.url)
                }
                // return back the full share url
                return url;
            } else {
                return false;
            }
        },
        shareGooglePlusUrl: function(params) {
            if (!params.url) {
                return false;
            }
            return 'https://plus.google.com/share?url=' + encodeURIComponent(params.url);
        },
        shareLinkedInUrl: function(params) {
            // check it an url is defined
            if (params.url) {
                var url = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(params.url);
                // if a title is passed add it to the share url
                if (params.title) {
                    url = url + '&title=' + encodeURIComponent(params.title);
                }
                if (params.summary) {
                    // if a summary is passed add it to the share url
                    url = url + '&summary=' + encodeURIComponent(params.summary);
                }
                // return back the full share url
                return url;
            } else {
                return false;
            }
        },
        shareEmailUrl: function(params) {
            if (!params.subject || !params.body) {
                return false;
            }
            return 'mailto:?subject=' + encodeURIComponent(params.subject) + '&body=' + encodeURIComponent(params.body);
        }
    };
})();
