define(function() {
    'use strict';
    return (function() {
        var isAvaliable = function() {
            if (typeof(Storage) !== 'undefined') {
                return true;
            } else {
                return false;
            }
        };
        var set = function(key, value) {
            if (this.isAvaliable()) {
                return localStorage.setItem(key, value);
            } else {
                return;
            }
        };
        var get = function(key) {
            if (this.isAvaliable()) {
                return localStorage.getItem(key);
            } else {
                return;
            }
        };
        return {
            'isAvaliable': isAvaliable,
            'set': set,
            'get': get
        };
    })();
});
