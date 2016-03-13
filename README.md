# shackstack

[![Build Status](https://travis-ci.org/bshack/shackstack.svg?branch=master)](https://travis-ci.org/bshack/shackstack)

Out of the box it creates a boilerplate site:

http://billshackelford.com

In addition it includes a customizable toolkit:

http://billshackelford.com/toolkit

## Key Libraries

- BackboneJS
- Browserify
- Browsersync
- Foundation
- Gulp
- Handlebars
- Jasmine
- jQuery
- Modernizr
- Karma
- SCSS

## Install Dependancies

IMPORTANT: Verify you have the latest versions of each of these if you have previously installed them.

### Nodejs

http://nodejs.org

_This project works with 'LTS' or 'stable'_

### Gulp

http://gulpjs.com

### Python

Mac OS X users can skip this.

https://www.python.org/downloads/

### Node Modules

```
npm install;
```

### Text Editor Config

Install the correct plugin for your text editor here:

http://editorconfig.org/#download

This will normalize settings like what tab character(s) to use and will avoid linting errors.

## Locations

### Source Files

Site source files used to build your site are located in the 'app/' directory.

### Stubbed JSON Data

Any generated html page can have an associated JSON data file in 'service/view/' directory. This is where you can
stub out data to be used for populating the markup templates for that page. Follow the same directory and file structure as your
pages.

Define any data properties you want available for all your pages in 'global.json'. Any properties defined in page specific JSON files will override properties in 'global.json'.

## Gulp Tasks

### Watch

```
gulp watch;
```

This will create a Browsersync server and reload your browser window(s) as you make code changes.

Learn more about Browsersync here: https://www.browsersync.io

If you want to run the 'watch' task without Browsersync you can do so like this:

```
gulp watch --sync=false;
```

### Deploy

This compiles and bundles everything into a deploy ready package outputted in the '\_deploy' directory.

```
gulp deploy --version=(unique deploy version - optional) --www=(www domain) --cdn=(cdn domain) --service=(service domain) --production=(true|false - optional);
```

_The 'version' argument defaults to an epoch timestamp and the 'production' argument defaults to 'false'._

The above site was created by running the 'deploy' task with the following arguments:

```
gulp deploy --www=//billshackelford.com --cdn=//cdn.billshackelford.com --service=//service.billshackelford.com --production=true;
```

### Unit Tests

```
gulp unit;
```

### More

These all run as dependencies of the 'watch' and 'deploy' tasks.

```
gulp markup;
gulp markupTemplate;
gulp style;
gulp script;
gulp sprite;
gulp accessibility;
gulp documentation;
```

## Test If Your Project Will Build

Run this when you want to verify your changes will build properly on the CI server before pushing:

```
npm test;
```

## NPM Shrinkwrap

This project uses npm shrinkwrap to freeze npm module versions for improved project stability. More information here: https://docs.npmjs.com/cli/shrinkwrap.

## Using it with Yeoman

Install as a node module:

```
npm install generator-shackstack -g;
```

Then in an empty directory:

```
yo shackstack;
```

Learn more about Yeoman here: https://yeoman.io

## Bugs? Feature Requests?

Pull request or log a ticket :)
