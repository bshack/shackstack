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
            expect(share.shareFacebookUrl({
                url: 'http://example.com/directory/index.html?param-1=1&param-2=2'
            }))
            .toBe('https://www.facebook.com/sharer.php?u=' +
                'http%3A%2F%2Fexample.com%2Fdirectory%2Findex.html%3Fparam-1%3D1%26param-2%3D2');
        });
    });
    describe('generating a Twitter share url', function() {
        it('does not return anything if there are over 140 characters', function() {
            expect(share.shareTwitterUrl({
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                    'Nullam porta velit vel lacinia posuere. Curabitur sit amet sem eleifend sem aliquam posuere.'
            }))
            .toBe(false);
        });
    });
    describe('generating a Twitter share url', function() {
        it('does not return anything if there is no message provided', function() {
            expect(share.shareTwitterUrl({}))
            .toBe(false);
        });
    });
    describe('generating a Twitter share url with a message only', function() {
        it('sucessfully returns the expected url', function() {
            expect(share.shareTwitterUrl({
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }))
            .toBe('https://twitter.com/intent/tweet?text=' +
                'Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.');
        });
    });
    describe('generating a Twitter share url with a message and url', function() {
        it('sucessfully returns the expected url', function() {
            expect(share.shareTwitterUrl({
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                url: 'http://example.com/directory/index.html?param-1=1&param-2=2'
            }))
            .toBe('https://twitter.com/intent/tweet?' +
                'text=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.&' +
                'url=http%3A%2F%2Fexample.com%2Fdirectory%2Findex.html%3Fparam-1%3D1%26param-2%3D2');
        });
    });
    describe('generating a Google Plus share url', function() {
        it('sucessfully returns the expected url', function() {
            expect(share.shareGooglePlusUrl({
                url: 'http://example.com/directory/index.html?param-1=1&param-2=2'
            }))
            .toBe('https://plus.google.com/share?url=' +
                'http%3A%2F%2Fexample.com%2Fdirectory%2Findex.html%3Fparam-1%3D1%26param-2%3D2');
        });
    });


    describe('generating a Google Plus share url', function() {
        it('does not return anything if there is no url provided', function() {
            expect(share.shareGooglePlusUrl({}))
            .toBe(false);
        });
    });


    describe('generating a LinkedIn share url', function() {
        it('sucessfully returns the expected url', function() {
            expect(share.shareLinkedInUrl({
                url: 'http://example.com/directory/index.html?param-1=1&param-2=2'
            }))
            .toBe('https://www.linkedin.com/shareArticle?url=' +
                'http%3A%2F%2Fexample.com%2Fdirectory%2Findex.html%3Fparam-1%3D1%26param-2%3D2');
        });
    });
    describe('generating a LinkedIn share url', function() {
        it('does not return anything if there is no url provided', function() {
            expect(share.shareLinkedInUrl({}))
            .toBe(false);
        });
    });
    describe('generating a LinkedIn share url', function() {
        it('sucessfully returns the expected url when a title is provided', function() {
            expect(share.shareLinkedInUrl({
                url: 'http://example.com/directory/index.html?param-1=1&param-2=2',
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }))
            .toBe('https://www.linkedin.com/shareArticle?' +
                'url=http%3A%2F%2Fexample.com%2Fdirectory%2Findex.html%3Fparam-1%3D1%26param-2%3D2&' +
                'title=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.');
        });
    });
    describe('generating a LinkedIn share url', function() {
        it('sucessfully returns the expected url when a summary is provided', function() {
            expect(share.shareLinkedInUrl({
                url: 'http://example.com/directory/index.html?param-1=1&param-2=2',
                summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }))
            .toBe('https://www.linkedin.com/shareArticle?' +
                'url=http%3A%2F%2Fexample.com%2Fdirectory%2Findex.html%3Fparam-1%3D1%26param-2%3D2&' +
                'summary=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.');
        });
    });
    describe('generating an email share url', function() {
        it('sucessfully returns the expected url', function() {
            expect(share.shareEmailUrl({
                subject: 'Lorem ipsum dolor sit amet',
                body: 'Nullam porta velit vel lacinia posuere. Curabitur sit amet sem eleifend sem aliquam posuere.'
            }))
            .toBe('mailto:?subject=Lorem%20ipsum%20dolor%20sit%20amet&body=' +
                'Nullam%20porta%20velit%20vel%20lacinia%20posuere.' +
                '%20Curabitur%20sit%20amet%20sem%20eleifend%20sem%20aliquam%20posuere.');
        });
    });
    describe('generating a email share url', function() {
        it('does not return anything if there is no subject provided', function() {
            expect(share.shareEmailUrl({
                body: 'Nullam porta velit vel lacinia posuere. Curabitur sit amet sem eleifend sem aliquam posuere.'
            }))
            .toBe(false);
        });
    });
    describe('generating a email share url', function() {
        it('does not return anything if there is no body provided', function() {
            expect(share.shareEmailUrl({
                subject: 'Lorem ipsum dolor sit amet'
            }))
            .toBe(false);
        });
    });
})();
