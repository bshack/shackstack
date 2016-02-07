# shackstack

[![Build Status](https://travis-ci.org/bshack/shackstack.svg?branch=master)](https://travis-ci.org/bshack/shackstack)

Out of the box it creates a boilerplate site:

http://billshackelford.com

In addition it includes a customizable toolkit:

http://billshackelford.com/toolkit

## Key Libraries Leveraged

- BackboneJS
- Browserify
- Foundation
- Gulp
- Handlebars
- Jasmine
- jQuery
- Karma

## Install Dependancies

### Nodejs

http://nodejs.org

### Gulp

http://gulpjs.com

### Node Modules

<pre>npm install; (might need to sudo)</pre>

## Locations

### Source Files

Site source files used to build your site are located in the 'app/' directory.

### Stubbed JSON Data

Every generated html page is required to have matching .json file in 'service/' directory. This is where you stub out data that is to be used to populate the markup templates.

Define any data properties you want globally available in your pages in 'default.json'. Any properties defined in page specific .json files will override properties in 'default.json'.

## Gulp Tasks

### Watch

<pre>gulp watch;</pre>

### Deploy

This compiles and bundles everything into a deploy ready package outputted in the '\_deploy' directory.

<pre>gulp deploy
    --version=(unique deploy version - optional)
    --www=(www domain)
    --cdn=(cdn domain)
    --service=(service domain)
    --production=(true|false - optional);</pre>

_The 'version' argument defaults to an epoch timestamp and the 'production' argument defaults to 'false'._

The above site was created by running the 'deploy' task with the following arguments:

<pre>gulp deploy
    --www=//billshackelford.com
    --cdn=//cdn.billshackelford.com
    --service=//service.billshackelford.com
    --production=true;</pre>

### Unit Tests

<pre>gulp unit;</pre>

### More

These all run as dependencies of the 'watch' and 'deploy' tasks.

<pre>gulp markup;
gulp markupTemplate;
gulp style;
gulp script;
gulp sprite;
gulp accessibility;
gulp documentation;</pre>

## NPM Shrinkwrap

This project uses npm shrinkwrap to freeze npm module versions for improved project stability. More information here: https://docs.npmjs.com/cli/shrinkwrap.

## Bugs? Feature Requests?

Pull request or log a ticket :)
