// ## Load Modules

var yargs = require('yargs').argv;

// ## Environment Config

var isProduction;
if (yargs.production) {
    isProduction = yargs.production;
} else {
    isProduction = false;
}

// setting the build version
var version;
if (yargs.version) {
    version = yargs.version;
} else {
    //by default set the version to a timestamp
    version = Math.floor(new Date() / 1000);
}

//setting a www domain for build
var www;
//test if www is defined
if (yargs.www) {
    www = yargs.www + '/';
} else {
    www = '/';
}

//setting a cdn domain for build
var cdn;
//test if cdn is defined
if (yargs.cdn) {
    cdn = yargs.cdn + '/release/' + version + '/';
} else {
    cdn = '/';
}

//setting a service domain for build
var service;
//test if www is defined
if (yargs.service) {
    service = yargs.service + '/';
} else {
    service = '/';
}

// ## paths
module.exports = {
    // ## Path Variables
    path: {
        // ### build
        // where to save deployable files
        build: '_deploy',
        root: 'app/',
        version: version,
        www: www,
        cdn: cdn,
        service: service,
        // is this a production build?
        isProduction: isProduction,
        // ### image
        image: {
            // glob of all image files and directories excluding icon source files
            source: [
                'app/assets/image/**',
                '!app/assets/image/sprite/**'
            ],
            // location to save processed images by tasks
            destination: 'assets/image',
            // #### sprite
            sprite: {
                // glob of all svg images converted to png images
                compliled: [
                    'app/assets/image/sprite/**/*.png'
                ],
                // where to save generated scss styles
                scss: '_sprite.scss',
                // template for the scss file format
                template: 'gulp/views/sprite.handlebars',
                // path output in css files pointing to where sprite files are
                cssPath: '../image',
                // glob of all the source svg icons
                source: [
                    'app/assets/image/sprite/**/*.svg'
                ],
                // where to save the generated .png images
                destination: {
                    png: 'app/assets/image/sprite',
                    sprite: 'app/assets/image'
                }
            }
        },
        // ### markup
        markup: {
            // htmllint config file
            htmlLint: '.htmllintrc',
            // glob of handlebars templates
            source: [
                'app/**/*.handlebars',
                '!app/assets/**',
                '!app/report/**',
                '!app/service/**'
            ],
            // glob of generated html files
            destination: [
                'app/**/*.html',
                '!app/assets/**',
                '!app/report/**',
                '!app/service/**'
            ],
            partials: {
                //glob of handlebars partials
                source: [
                    'app/assets/markup'
                ],
                // glob of handlebars partials, needed for watch task
                watch: 'app/assets/markup/**',
                // where to save generated js templates
                destination: 'app/assets/script/template'
            }
        },
        // ### font
        font: {
            // glob of fonts
            source: 'app/assets/font/**',
            // where to save fonts
            destination: 'assets/font'
        },
        // ### script
        script: {
            // karma test runner conig file
            karma: __dirname + '/../karma.conf.js',
            // where to save out the modernizr built file
            modernizr: 'node_modules/modernizr/modernizr.js',
            // glob of all js files including gulp and application
            all: [
                '*.js',
                'gulp/tasks/*.js',
                'gulp/*.js',
                'grunt/tasks/*.js',
                'gulp/options/.js',
                'app/assets/script/*.js',
                'app/assets/script/**/*.js',
                'app/assets/test/spec/*.js',
                'app/assets/test/*.js',
                '!app/assets/script/template/**',
                '!app/assets/script/*.compiled.js'
            ],
            // glob of only gulp js files for documentation task
            // glob of only gulp js files for documentation task
            gulp: [
                '*.js',
                'gulp/tasks/*.js',
                'gulp/*.js',
                'grunt/tasks/*.js',
                'gulp/options/.js'
            ],
            // glob of only application files for documentation task
            source: [
                'app/assets/script/*.js',
                'app/assets/script/**/*.js',
                '!app/assets/script/template/**',
                '!app/assets/script/*.compiled.js'
            ],
            // glob js files to be delployed duirng release
            release: [
                'app/assets/script/global.compiled.js'
            ],
            // file to be compliled by browserify
            compile: {
                source: 'app/assets/script/global.js',
                destination: 'app/assets/script',
                filename: 'global.compiled.js'
            },
            // where to save script files in release task
            destination: 'assets/script'
        },
        // ### style
        style: {
            // scsslint config file
            scssLint: '.scss-lint.yml',
            source: {
                // glob of all scss files
                scss: [
                    'app/assets/style/*.scss',
                    'app/assets/style/**/*.scss'
                ],
                 // glob of all css files
                css: [
                    'app/assets/style/*.css'
                ]
            },
            // where to save style files
            destination: {
                watch: 'app/assets/style',
                release: 'assets/style'
            }
        },
        // ### data
        data: {
            directory: 'app/service',
            source: 'app/service/**',
            destination: 'service',
            pageDirectory: 'view/',
            pageDefaultData: 'global.json'
        },
        // ### release
        release: {
            destination: '/release/',
            copy: [
                'app/sitemap.xml',
                'app/robots.txt',
                'app/favicon.ico',
                'app/web.config',
                'app/.htaccess'
            ]
        },
        // ### report
        report: {
            // where to save code complexity report
            source: 'app/report/**',
            destination: 'report',
            plato: 'app/report/plato'
        }
    }
};
