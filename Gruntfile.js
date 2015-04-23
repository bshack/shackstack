module.exports = function(grunt) {
    'use strict';
    require('time-grunt')(grunt);
    var _ = require('lodash-node');
    var configFile = './config/environment.json';
    var envData = grunt.file.readJSON(configFile);
    var revisionFile;
    var time = new Date().toDateString().substring(4).replace(/ /g, '-');
    if (grunt.file.exists(envData.path.git.revision)) {
        revisionFile = envData.path.git.revision;
    } else {
        revisionFile = envData.path.git.head;
    }
    var revisionData = {
        revision: grunt.file.read(revisionFile).trim()
    };
    grunt.file.write(envData.path.source + '/config/revision.json', JSON.stringify(revisionData, null, 2));
    envData.path.bower = envData.path.site + '/bower_components';
    envData.path.site = envData.path.source + '/sites/' + (grunt.option('site') || 'default');
    envData.path.release = envData.path.site + '/' + envData.path.release + '/' + revisionData.revision;
    envData.path.build = envData.path.site + '/' + envData.path.build;
    envData.path.karma = envData.path.site + '/' + envData.path.karma;
    grunt.initConfig({
        envData: envData,
        autoprefixer: {
            options: {
                browsers: [
                    '> 1%',
                    'last 3 versions'
                ],
                map: true
            },
            development: {
                src: [
                    '<%= envData.path.site %>/style/*.css',
                    '<%= envData.path.site %>/style/**/*.css'
                ]
            },
            release: {
                src: [
                    '<%= envData.path.release %>/style/*.css',
                    '<%= envData.path.release %>/style/**/*.css'
                ]
            }
        },
        clean: {
            app: {
                src: ['<%= envData.path.app %>/default/www']
            },
            build: {
                src: [
                    '<%= envData.path.build %>'
                ]
            }
        },
        compass: {
            release: {
                options: {
                    sourcemap: true,
                    sassDir: '<%= envData.path.site %>/style',
                    cssDir: '<%= envData.path.release %>/style',
                    imagesDir: '<%= envData.path.site %>/image',
                    httpImagesPath: '../image/',
                    environment: 'production'
                }
            },
            development: {
                options: {
                    sourcemap: true,
                    sassDir: '<%= envData.path.site %>/style',
                    cssDir: '<%= envData.path.site %>/style',
                    imagesDir: '<%= envData.path.site %>/image',
                    httpImagesPath: '../image/',
                    relativeAssets: true
                }
            }
        },
        compress: {
            bundle: {
                options: {
                    archive: '<%= envData.path.site %>/<%= envData.path.bundle %>/bundle-' +
                        time + '-' + revisionData.revision + '.zip'
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= envData.path.build %>',
                        src: [
                            '**',
                            '*.*'
                        ],
                        dest: 'bundle-' + time + '-' + revisionData.revision
                    }
                ]
            }
        },
        concurrent: {
            build: [
                'svgmin:release',
                'imagemin:release',
                'build:style',
                'build:script',
                'sync:font',
                'sync:robots'
            ],
            email: [
                'svgmin:release',
                'imagemin:release',
                'build:style',
                'sync:font'
            ],
            test: [
                'karma:unit'
            ],
            report: [
                'plato:all',
                'jsdoc:all',
                'scsslint:all'
            ]
        },
        'compile-handlebars': {
            production: {
                template: '<%= envData.path.site %>/*.handlebars',
                templateData: _.merge(
                    grunt.file.readJSON('config/environment.json'),
                    grunt.file.readJSON('config/revision.json'),
                    grunt.file.readJSON(envData.path.site + '/page.json'),
                    {
                        'isBuild': true,
                        'path': {
                            'url': envData.environment.production.url,
                            'media': envData.environment.production.media + '/release/' + revisionData.revision
                        }
                    }
                ),
                partials: [
                    '<%= envData.path.site %>/views/*.handlebars',
                    '<%= envData.path.site %>/views/**/*.handlebars'
                ],
                output: '<%= envData.path.build %>/*.html'
            },
            development: {
                template: '<%= envData.path.site %>/*.handlebars',
                templateData: _.merge(
                    grunt.file.readJSON('config/environment.json'),
                    grunt.file.readJSON('config/revision.json'),
                    grunt.file.readJSON(envData.path.site + '/page.json'),
                    {
                        'isBuild': true,
                        'path': {
                            'url': 'http://test.' + envData.environment.development.url +
                                '/<%= job %>',
                            'media': 'http://test.' + envData.environment.development.media  +
                                '/<%= job %>' + '/release/' + revisionData.revision
                        }
                    }
                ),
                partials: [
                    '<%= envData.path.site %>/views/*.handlebars',
                    '<%= envData.path.site %>/views/**/*.handlebars'
                ],
                output: '<%= envData.path.build %>/*.html'
            },
            test: {
                template: '<%= envData.path.site %>/*.handlebars',
                templateData: _.merge(
                    grunt.file.readJSON('config/environment.json'),
                    grunt.file.readJSON('config/revision.json'),
                    grunt.file.readJSON(envData.path.site + '/page.json'),
                    {
                        'isBuild': true,
                        'path': {
                            'url': envData.environment.test.url,
                            'media': envData.environment.test.media + '/release/' + revisionData.revision
                        }
                    }
                ),
                partials: [
                    '<%= envData.path.site %>/views/*.handlebars',
                    '<%= envData.path.site %>/views/**/*.handlebars'
                ],
                output: '<%= envData.path.site %>/*.html'
            },
            local: {
                template: '<%= envData.path.site %>/*.handlebars',
                templateData: _.merge(
                    grunt.file.readJSON('config/environment.json'),
                    grunt.file.readJSON('config/revision.json'),
                    grunt.file.readJSON(envData.path.site + '/page.json'),
                    {
                        'isBuild': false,
                        'path': {
                            'url': envData.environment.local.url,
                            'media': envData.environment.local.media
                        }
                    }
                ),
                partials: [
                    '<%= envData.path.site %>/views/*.handlebars',
                    '<%= envData.path.site %>/views/**/*.handlebars'
                ],
                output: '<%= envData.path.site %>/*.html'
            }
        },
        cordovacli: {
            options: {
                path: '<%= envData.path.app %>/default'
            },
            build: {
                options: {
                    command: 'build',
                    platforms: ['ios']
                }
            },
            emulate: {
                options: {
                    command: 'emulate',
                    platforms: ['ios']
                }
            }
        },
        emberTemplates: {
            compile: {
                options: {
                    amd: true,
                    templateName: function(filePath) {
                        return filePath
                            .replace('./sites/default/views/', '')
                            .replace('partials/', '')
                            .replace('.handlebars', '');
                    }
                },
                files: {
                    '<%= envData.path.site %>/script/compiledTemplates/compiledEmber.js': [
                        '<%= envData.path.site %>/views/*.handlebars',
                        '<%= envData.path.site %>/views/**/*.handlebars'
                    ]
                }
            }
        },
        handlebars: {
            compile: {
                options: {
                    amd: ['handlebars'],
                    partialsUseNamespace: true,
                    processName: function(filePath) {
                        return filePath
                            .replace('./sites/default/views/', '')
                            .replace('partials/', '')
                            .replace('.handlebars', '');
                    }
                },
                files: {
                    '<%= envData.path.site %>/script/compiledTemplates/compiled.js': [
                        '<%= envData.path.site %>/views/*.handlebars',
                        '<%= envData.path.site %>/views/**/*.handlebars'
                    ]
                }
            }
        },
        htmllint: {
            options: {
                ignore: [
                    'Bad value “apple-mobile-web-app-title” for attribute “name” on XHTML element “meta”:' +
                        ' Keyword “apple-mobile-web-app-title” is not registered.'
                ]
            },
            release: [
                '<%= envData.path.site %>/*.html'
            ]
        },
        htmlmin: {
            options: {
                removeComments: true,
                removeCommentsFromCDATA: true,
                removeCDATASectionsFromCDATA: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                preserveLineBreaks: false,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: false,
                removeRedundantAttributes: false,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeOptionalTags: true,
                removeIgnored: true,
                removeEmptyElements: false,
                lint: false,
                keepClosingSlash: false,
                caseSensitive: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            release: {
                files: [{
                    expand: true,
                    cwd: '<%= envData.path.build %>/',
                    src: [
                        '*.html'
                    ],
                    dest: '<%= envData.path.build %>'
                }]
            }
        },
        imagemin: {
            release: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: '<%= envData.path.site %>/image/',
                    src: [
                        '*.{png,jpg,gif,ico}',
                        '**/*.{png,jpg,gif,ico}'
                    ],
                    dest: '<%= envData.path.release %>/image/'
                }]
            }
        },
        jscs:{
            main: {
                options: {
                    config: envData.path.jscs,
                },
                files: {
                    src: [
                        '<%= envData.path.source %>/*.js',
                        '<%= envData.path.site %>/script/*.js',
                        '<%= envData.path.site %>/script/**/*.js',
                        '<%= envData.path.site %>/test/*.js',
                        '<%= envData.path.site %>/test/**/*.js',
                        '<%= envData.path.source %>/_grunt/*.js',
                        '!<%= envData.path.site %>/script/compiledTemplates/*.js',
                        '!<%= envData.path.site %>/script/compiledTemplates/**/*.js'
                    ]
                }
            },
        },
        jsdoc : {
            all : {
                src: [
                    '<%= envData.path.source %>/script/*.js',
                    '<%= envData.path.source %>/script/**/*.js',
                    '<%= envData.path.source %>/sites/*/script/*.js',
                    '<%= envData.path.source %>/sites/*/script/**/*.js'
                ],
                options: {
                    destination: '<%= envData.path.documenation %>'
                }
            }
        },
        jshint: {
            main: [
                '<%= envData.path.source %>/*.js',
                '<%= envData.path.site %>/script/*.js',
                '<%= envData.path.site %>/script/**/*.js',
                '<%= envData.path.site %>/test/*.js',
                '<%= envData.path.site %>/test/**/*.js',
                '<%= envData.path.source %>/_grunt/*.js',
                '!<%= envData.path.site %>/script/compiledTemplates/*.js',
                '!<%= envData.path.site %>/script/compiledTemplates/**/*.js'
            ],
            options: grunt.file.readJSON(envData.path.jshint)
        },
        jsonlint: {
            all: {
                src: [
                    '<%= envData.path.source %>/*.json',
                    '<%= envData.path.site %>/*.json',
                    '<%= envData.path.source %>/config/*.json'
                ]
            }
        },
        karma: {
            unit: {
                configFile: envData.path.karma,
                runnerPort: 9999,
                singleRun: true
            }
        },
        plato: {
            all: {
                options: {
                    jshint: grunt.file.readJSON(envData.path.jshint)
                },
                files: {
                    '<%= envData.path.report %>/plato': [
                        '*.js',
                        '<%= envData.path.source %>/script/*.js',
                        '<%= envData.path.source %>/script/**/*.js',
                        '<%= envData.path.source %>/sites/*/script/*.js',
                        '<%= envData.path.source %>/sites/*/script/**/*.js'
                    ]
                }
            }
        },
        requirejs: {
            release: {
                options: {
                    baseUrl: '<%= envData.path.site %>/script',
                    mainConfigFile: '<%= envData.path.site %>/script/config.js',
                    include: 'global',
                    name: '../bower_components/almond/almond',
                    out: '<%= envData.path.release %>/script/global.js',
                    findNestedDependencies: true,
                    preserveLicenseComments: false
                }
            }
        },
        scsslint: {
            all: [
                '<%= envData.path.site %>/style/*.scss',
                '<%= envData.path.site %>/style/**/*.scss'
            ],
            options: {
                bundleExec: false,
                config: envData.path.scsslint,
                reporterOutput: '<%= envData.path.report %>/scsslint/scss-lint-report.xml',
                colorizeOutput: true
            }
        },
        shrinkwrap: {
        },
        strip: {
            release: {
                src: [
                    '<%= envData.path.release %>/script/*.js',
                    '<%= envData.path.release %>/script/**/*.js'
                ],
                options: {
                    inline: true,
                    nodes: [
                        'console.log',
                        'debug',
                        'alert'
                    ]
                }
            }
        },
        svgmin: {
            options: {
                plugins: [{
                    cleanupAttrs: true,
                    cleanupEnableBackground: true,
                    cleanupIDs: true,
                    cleanupNumericValues: true,
                    collapseGroup: true,
                    convertColors: true,
                    convertPathData: true,
                    convertShapeToPath: true,
                    convertStyleToAttrs: true,
                    convertTransform: true,
                    mergePaths: true,
                    moveElemsAttrsToGroup: true,
                    moveGroupAttrsToElems: true,
                    removeComments: true,
                    removeDoctype: true,
                    removeEditorsNSData: true,
                    removeEmptyAttrs: true,
                    removeEmptyContainers: true,
                    removeEmptyText: true,
                    removeHiddenElems: true,
                    removeMetadata: true,
                    removeNonInheritableGroupAttrs: true,
                    removeRasterImages: true,
                    removeTitle: true,
                    removeUnknownsAndDefaults: true,
                    removeUnusedNS: true,
                    removeUselessStrokeAndFill: true,
                    removeViewBox: true,
                    removeXMLProcInst: true,
                    sortAttrs: true,
                    transformsWithOnePath: true
                }]
            },
            release: {
                expand: true,
                cwd: '<%= envData.path.site %>/image/',
                src: [
                    '*.svg',
                    '**/*.svg'
                ],
                dest: '<%= envData.path.release %>/image/'
            }
        },
        sync: {
            robots: {
                files: [{
                    expand: true,
                    cwd: '<%= envData.path.site %>',
                    src: ['robots.txt'],
                    dest: '<%= envData.path.build %>',
                }]
            },
            font: {
                files: [{
                    expand: true,
                    cwd: '<%= envData.path.site %>/font/',
                    src: ['**'],
                    dest: '<%= envData.path.release %>/font/',
                }]
            },
            app: {
                files: [{
                    expand: true,
                    cwd: '<%= envData.path.build %>',
                    src: [
                        '**',
                        '*.*'
                    ],
                    dest: '<%= envData.path.app %>/default/www',
                }]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            configFiles: {
                files: [
                    '<%= envData.path.source %>/Gruntfile.js',
                    '<%= envData.path.source %>/_grunt/*.js'
                ],
                options: {
                    reload: true
                },
                tasks: [
                    'newer:jscs:main',
                    'newer:jshint:main'
                ]
            },
            data: {
                files: [
                    '<%= envData.path.source %>/*.json',
                    '<%= envData.path.site %>/*.json',
                    '<%= envData.path.source %>/config/*.json',
                    '!<%= envData.path.source %>/config/revision.json'
                ],
                tasks: [
                    'newer:jsonlint:all',
                    'newer:handlebars:compile',
                    'emberTemplates:compile',
                    'compile-handlebars:local',
                    'newer:htmllint:release'
                ]
            },
            scripts: {
                files: [
                    '<%= envData.path.source %>/*.js',
                    '<%= envData.path.site %>/script/*.js',
                    '<%= envData.path.site %>/script/**/*.js',
                    '<%= envData.path.site %>/test/*.js',
                    '<%= envData.path.site %>/test/**/*.js',
                    '!<%= envData.path.source %>/Gruntfile.js'
                ],
                tasks: [
                    'newer:jscs:main',
                    'newer:jshint:main'
                ]
            },
            styles: {
                files: [
                    '<%= envData.path.site %>/style/*.scss',
                    '<%= envData.path.site %>/style/**/*.scss'
                ],
                tasks: [
                    'newer:scsslint:all',
                    'compass:development',
                    'newer:autoprefixer:development'
                ],
                options: {
                    atBegin: true
                }
            },
            templates: {
                files: [
                    '<%= envData.path.site %>/*.handlebars',
                    '<%= envData.path.site %>/views/*.handlebars',
                    '<%= envData.path.site %>/views/**/*.handlebars'
                ],
                tasks: [
                    'newer:handlebars:compile',
                    'emberTemplates:compile',
                    'compile-handlebars:local',
                    'newer:htmllint:release'
                ],
                options: {
                    atBegin: true
                }
            }
        }
    });
    grunt.loadTasks('_grunt');
    require('load-grunt-tasks')(grunt);
};
