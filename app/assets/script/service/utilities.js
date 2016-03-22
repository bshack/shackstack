(function() {
    'use strict';
    const $ = require('jquery');
    module.exports = {
        htmlEncode: function(value) {
            return $('<div/>').text(value).html();
        },
        htmlDecode: function(value) {
            return $('<div/>').html(value).text();
        }
    };
})();
