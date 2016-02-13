(function() {
    'use strict';
    var $ = require('jquery');
    module.exports = {
        htmlEncode: function(value) {
            return $('<div/>').text(value).html();
        },
        htmlDecode: function(value) {
            return $('<div/>').html(value).text();
        }
    };
})();
