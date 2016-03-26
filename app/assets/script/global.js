(function() {
    'use strict';
    //dependencies
    const $ = require('jquery');
    const fastclick = require('fastclick');
    const ModelEnvironment = require('./model/environment');
    const ViewYouTubeApi1 = require('./view/toolkit/api/youtube-api-1');
    const ViewGoogleAnalyticsApi1 = require('./view/toolkit/api/google-analytics-api-1');
    const ViewFacebookApi1 = require('./view/toolkit/api/facebook-api-1');
    const ViewToolkit = require('./view/toolkit');
    const ViewWindow1 = require('./view/toolkit/utilities/window-1');
    const ViewGoogleAnalyticsEvents1 = require('./view/toolkit/utilities/google-analytics-events-1');
    const ViewWindowScrollTo1 = require('./view/toolkit/components/window-scroll-to-1');
    const $window = $(window);
    const $body = $('body');
    require('foundation-sites');
    // speed up precieved click event performance
    fastclick(document.body);
    // initialize foundation
    $(document).foundation();
    // get the environment settings as an example
    const env = new ModelEnvironment();
    $window.get(0).console.log('Environment Paths:', env.attributes);
    // // set up the window events to be subscribed to
    new ViewWindow1({
        el: $window
    });
    new ViewWindowScrollTo1({
        el: $window
    });
    new ViewYouTubeApi1({
        el: $window
    });
    new ViewGoogleAnalyticsApi1({
        el: $window,
        model: env
    });
    new ViewGoogleAnalyticsEvents1({
        el: $window
    });
    new ViewFacebookApi1({
        el: $window,
        model: env
    });
    // if on toolkit page init the view
    if (env.get('view').lastIndexOf('toolkit', 0) === 0) {
        new ViewToolkit({
            el: $body
        });
    }
})();
