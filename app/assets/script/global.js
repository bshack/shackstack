(function() {
    'use strict';
    //dependencies
    const $ = require('jquery');
    const fastclick = require('fastclick');
    const ModelEnvironment = require('./model/environment');
    const ViewToolkit = require('./view/toolkit');
    const ViewWindow1 = require('./view/toolkit/window-1');
    const ViewWindowScrollTo1 = require('./view/toolkit/window-scroll-to-1');
    const ViewYouTubeApi1 = require('./view/toolkit/youtube-api-1');
    const ViewGoogleAnalytics1 = require('./view/toolkit/google-analytics-1');
    const ViewFacebook1 = require('./view/toolkit/facebook-1');
    const $window = $(window);
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
    new ViewGoogleAnalytics1({
        el: $window,
        model: env
    });
    new ViewFacebook1({
        el: $window,
        model: env
    });
    // if on toolkit page init the view
    if (env.get('view').lastIndexOf('toolkit', 0) === 0) {
        new ViewToolkit();
    }
})();
