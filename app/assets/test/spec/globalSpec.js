(function() {
    'use strict';
    var utilities = require('../../../../app/assets/script/service/utilities.js');
    describe('Canary', function() {
        it('is sucessfully running', function() {
            expect(true).toBe(true);
        });
    });
    describe('encoding html into entities', function() {
        it('sucessfully formats the markup and text into entities', function() {
            expect(utilities.htmlEncode('<&>')).toBe('&lt;&amp;&gt;');
        });
    });
    describe('decoding entities into markup', function() {
        it('sucessfully formats the entities into markup and text', function() {
            expect(utilities.htmlDecode('&lt;&amp;&gt;')).toBe('<&>');
        });
    });
})();
