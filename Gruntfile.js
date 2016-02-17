module.exports = function(grunt) {
    'use strict';
    // set up config object and pull in package.json
    var config = {
        pkg: grunt.file.readJSON('./package.json'),
        env: process.env
    };
    // load in all the task configs
    var loadConfig = function(path) {
        var glob = require('glob');
        var object = {};
        var key;
        glob.sync('*', {cwd: path}).forEach(function(option) {
            key = option.replace(/\.js$/,'');
            object[key] = require(path + option);
        });
        return object;
    }
    // add the task options to the config object
    grunt.util._.extend(config, loadConfig('./tasks/options/'));
    // initialize grunt config
    grunt.initConfig(config);
    // load in all the asks
    grunt.loadTasks('./grunt/tasks');
    // plull in all the grunt modules
    require('load-grunt-tasks')(grunt);
};
