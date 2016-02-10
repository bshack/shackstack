'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
    prompting: function () {
        this.log(yosay(
            'Setting up ' + chalk.red('generator-shackstack') + ' generator.'
        ));
    },
    install: function () {
        this.installDependencies({
            bower: false,
            npm: true
        });
    }
});
