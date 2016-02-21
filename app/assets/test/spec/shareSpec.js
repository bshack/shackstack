(function() {
    'use strict';
    var share = require('../../../../app/assets/script/service/share.js');
    describe('Canary', function() {
        it('is sucessfully running', function() {
            expect(true).toBe(true);
        });
    });
    describe('generating a Facebook share url', function() {
        it('sucessfully returns the expected url', function() {
            expect(share.shareFacebook({
                url: 'http://example.com/directory/index.html?param-1=1&param-2=2'
            }))
            .toBe('https://www.facebook.com/sharer.php?u=' +
                'http%3A%2F%2Fexample.com%2Fdirectory%2Findex.html%3Fparam-1%3D1%26param-2%3D2');
        });
    });
    describe('generating a Twitter share url', function() {
        it('does not return anything if there are over 140 characters', function() {
            expect(share.shareTwitter({
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                    'Nullam porta velit vel lacinia posuere. Curabitur sit amet sem eleifend sem aliquam posuere.'
            }))
            .toBe(false);
        });
    });
    describe('generating a Twitter share url', function() {
        it('sucessfully returns the expected url', function() {
            expect(share.shareTwitter({
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }))
            .toBe('https://twitter.com/intent/tweet?text=' +
                'Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.');
        });
    });
    describe('generating a Google Plus share url', function() {
        it('sucessfully returns the expected url', function() {
            expect(share.shareGooglePlus({
                url: 'http://example.com/directory/index.html?param-1=1&param-2=2'
            }))
            .toBe('https://plus.google.com/share?url=' +
                'http%3A%2F%2Fexample.com%2Fdirectory%2Findex.html%3Fparam-1%3D1%26param-2%3D2');
        });
    });
    describe('generating a LinkedIn share url', function() {
        it('sucessfully returns the expected url', function() {
            expect(share.shareLinkedIn({
                url: 'http://example.com/directory/index.html?param-1=1&param-2=2'
            }))
            .toBe('https://www.linkedin.com/shareArticle?url=' +
                'http%3A%2F%2Fexample.com%2Fdirectory%2Findex.html%3Fparam-1%3D1%26param-2%3D2');
        });
    });
    describe('generating an email share url', function() {
        it('sucessfully returns the expected url', function() {
            expect(share.shareEmail({
                subject: 'Lorem ipsum dolor sit amet',
                body: 'Nullam porta velit vel lacinia posuere. Curabitur sit amet sem eleifend sem aliquam posuere.'
            }))
            .toBe('mailto:?subject=Lorem%20ipsum%20dolor%20sit%20ametbody=' +
                'Nullam%20porta%20velit%20vel%20lacinia%20posuere.' +
                '%20Curabitur%20sit%20amet%20sem%20eleifend%20sem%20aliquam%20posuere.');
        });
    });
})();
