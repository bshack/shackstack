# shackstack

[![Build Status](https://travis-ci.org/bshack/shackstack.svg?branch=master)](https://travis-ci.org/bshack/shackstack)

Out of the box it creates a boilerplate site:

http://billshackelford.com

In addition it includes a customizable toolkit:

http://billshackelford.com/toolkit

## Key Libraries Leveraged

- BackboneJS
- Browserify
- Browsersync
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

```
npm install;
```

### Text Editor Config

Install the correct plugin for your text editor here:

http://editorconfig.org/#download

This will normalize things the tab character(s) used and will avoid linting errors.

## Locations

### Source Files

Site source files used to build your site are located in the 'app/' directory.

### Stubbed JSON Data

Any generated html page can have an associated JSON data file in 'service/view/' directory. This is where you can
stub out any data to be used for populating the markup templates for that page. Follow the same directory and file structure as your
pages.

Define any data properties you want available for all your pages in 'default.json'. Any properties defined in page specific JSON files will override properties in 'default.json'.

## Gulp Tasks

### Watch

```
gulp watch;
```

This will create a browsersync server and reload the window when you make code changes.

### Deploy

This compiles and bundles everything into a deploy ready package outputted in the '\_deploy' directory.

```
gulp deploy
    --version=(unique deploy version - optional)
    --www=(www domain)
    --cdn=(cdn domain)
    --service=(service domain)
    --production=(true|false - optional);
```

_The 'version' argument defaults to an epoch timestamp and the 'production' argument defaults to 'false'._

The above site was created by running the 'deploy' task with the following arguments:

```
gulp deploy
    --www=//billshackelford.com
    --cdn=//cdn.billshackelford.com
    --service=//service.billshackelford.com
    --production=true;
```

### Unit Tests

```
gulp unit;
```

### Build Tests

Run this when you want to verify your changes will build properly on the CI server before pushing:

```
npm test;
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

Learn more about Yeoman here: http://yeoman.io

## Bugs? Feature Requests?

Pull request or log a ticket :)
