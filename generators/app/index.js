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

    writing: function () {
        //copy over the site files
        this.fs.copy(
          this.templatePath('../../../app/**'),
          this.destinationPath('./app')
        );
        //copy over the tasks
        this.fs.copy(
          this.templatePath('../../../gulp/**'),
          this.destinationPath('./gulp')
        );
        //copy over the root files
        this.fs.copy(
          this.templatePath('../../../*.*'),
          this.destinationPath('./')
        );
        //copy over hidden files
        this.fs.copy(
          this.templatePath('../../../.*'),
          this.destinationPath('./')
        );
    },
    install: function () {
        this.installDependencies({
            bower: false,
            npm: true
        });
    }
});
