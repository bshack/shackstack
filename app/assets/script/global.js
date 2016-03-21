(function() {
    'use strict';
    //dependencies
    var $ = require('jquery');
    var fastclick = require('fastclick');
    var ModelEnvironment = require('./model/environment');
    var ViewToolkit = require('./view/toolkit');
    var ViewWindow1 = require('./view/toolkit/window-1');
    var ViewWindow2 = require('./view/toolkit/window-scroll-to-1');
    var ViewYouTubeApi1 = require('./view/toolkit/youtube-api-1');
    var ViewGoogleAnalytics1 = require('./view/toolkit/google-analytics-1');
    var ViewFacebook1 = require('./view/toolkit/facebook-1');
    var $window = $(window);
    require('foundation-sites');
    // speed up precieved click event performance
    fastclick(document.body);
    // initialize foundation
    $(document).foundation();
    // get the environment settings as an example
    var env = new ModelEnvironment();
    $window.get(0).console.log('Environment Paths:', env.attributes);
    // // set up the window events to be subscribed to
    new ViewWindow1({
        el: $window
    });
    new ViewWindow2({
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
