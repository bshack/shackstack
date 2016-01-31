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
    version = yargs.version + '/';
} else {
    //by default set the version to a timestamp
    version = Math.floor(new Date() / 1000) + '/';
}

//setting a www domain for build
var www;
//test if www is defined
if (yargs.www) {
    www = yargs.www;
} else {
    www = '';
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
        // is this a production build?
        isProduction: isProduction,
        // ### image
        image: {
            // glob of all image files and directories excluding icon source files
            source: [
                'app/media/image/**',
                '!app/media/image/sprite/**'
            ],
            // location to save processed images by tasks
            destination: 'media/image',
            // #### sprite
            sprite: {
                // glob of all svg images converted to png images
                compliled: [
                    'app/media/image/sprite/*.png'
                ],
                // where to save generated scss styles
                scss: '_sprite.scss',
                // template for the scss file format
                template: 'gulp/views/sprite.handlebars',
                // glob of all the source svg icons
                source: [
                    'app/media/image/sprite/**/*.svg'
                ],
                // where to save the generated .png images
                destination: {
                    png: 'app/media/image/sprite',
                    sprite: 'app/media/image'
                }
            }
        },
        // ### markup
        markup: {
            // htmllint config file
            htmlLint: '.htmllintrc',
            // glob of handlebars templates
            source: 'app/*.handlebars',
            // glob of generated html files
            destination: 'app/*.html',
            partials: {
                //glob of handlebars partials
                source: [
                    'app/media/markup'
                ],
                // glob of handlebars partials, needed for watch task
                watch: 'app/media/markup/**',
                // where to save generated js templates
                destination: 'app/media/script/template'
            }
        },
        // ### font
        font: {
            // glob of fonts
            source: 'app/media/font/**',
            // where to save fonts
            destination: 'media/font'
        },
        // ### script
        script: {
            // jscs config file
            jscs: '.jscsrc',
            // jshint config file
            jsHint: 'jshintrc.json',
            // karma test runner conig file
            karma: __dirname + '/../karma.conf.js',
            // glob of all js files including gulp and application
            all: [
                '*.js',
                'gulp/tasks/*.js',
                'gulp/*.js',
                'app/media/script/*.js',
                'app/media/script/**/*.js',
                'app/media/test/spec/*.js',
                'app/media/test/*.js',
                '!app/media/script/template/**',
                '!app/media/script/*.compiled.js'
            ],
            // glob of only gulp js files for documentation task
            gulp: [
                '*.js',
                'gulp/tasks/*.js',
                'gulp/*.js'
            ],
            // glob of only application files for documentation task
            source: [
                'app/media/script/*.js',
                'app/media/script/**/*.js',
                '!app/media/script/template/**',
                '!app/media/script/*.compiled.js'
            ],
            // glob js files to be delployed duirng release
            release: [
                'app/media/script/*.js',
                'app/media/script/**/*.js',
                '!app/media/script/app.js'
            ],
            // file to be compliled by browserify
            compile: {
                source: 'app/media/script/app.js',
                destination: 'app/media/script',
                filename: 'app.compiled.js'
            },
            // where to save script files in release task
            destination: 'media/script'
        },
        // ### style
        style: {
            // scsslint config file
            scssLint: '.scss-lint.yml',
            source: {
                // glob of all scss files
                scss: [
                    'app/media/style/*.scss',
                    'app/media/style/**/*.scss'
                ],
                 // glob of all css files
                css: [
                    'app/media/style/*.css'
                ]
            },
            // where to save style files
            destination: {
                watch: 'app/media/style',
                release: 'media/style'
            }
        },
        // ### data
        data: {
            source: 'app/service/**',
            destination: 'service'
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
            plato: 'app/report/plato',
            docco: {
                // location of docco generated html files
                source: 'app/report/docco',
                // location of docco generated templates files
                compiled: 'app/media/script/template/documentation',
                // where to save gulp documentation
                build: 'app/report/docco/build',
                // where to script script documentation
                script: 'app/report/docco/script',
                // where to save style documentation
                style: 'app/report/docco/style',
                // where to save template documentation
                template: 'app/report/docco/template'
            }
        }
    }
};
