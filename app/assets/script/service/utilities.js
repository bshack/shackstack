(() => {
    'use strict';
    const $ = require('jquery');
    module.exports = {
        htmlEncode: (value) => {
            return $('<div/>').text(value).html();
        },
        htmlDecode: (value) => {
            return $('<div/>').html(value).text();
        }
    };
})();
