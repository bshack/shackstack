(function() {
    'use strict';
    var $ = require('jquery');
    var fastclick = require('fastclick');
    var ModelEnvironment = require('./model/environment');
    var ViewToolkit = require('./view/toolkit');
    var ViewWindow1 = require('./view/toolkit/window-1');
    var ViewMetric1 = require('./view/toolkit/metric-1');
    var $window = $(window);
    var ViewFacebookSdk1 = require('./view/toolkit/facebook-sdk-1');
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
    new ViewMetric1({
        el: $window
    });
    new ViewFacebookSdk1();
    // if on toolkit page init the view
    if (env.get('view').lastIndexOf('toolkit', 0) === 0) {
        new ViewToolkit();
    }
})();
