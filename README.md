# shackstack

[![Build Status](https://travis-ci.org/bshack/shackstack.svg?branch=master)](https://travis-ci.org/bshack/shackstack)

Scaffolding for developing and deploying static sites.

Example site it creates out of the box:

http://www.billshackelford.com

It was created by running the 'deploy' task with the following options:

<pre>gulp deploy --www=//www.billshackelford.com --cdn=//cdn.billshackelford.com --service=//service.billshackelford.com --production=true;</pre>

## Setup

### Install Dependancies

#### Nodejs

http://nodejs.org

#### Gulp

http://gulpjs.com

### Clone

<pre>git clone https://github.com/bshack/shackstack;</pre>

### Install Node Modules

<pre>npm install; (might need to sudo)</pre>

## Locations

### Source Files

Site source files used to build your site are located in the 'app/' directory.

### Stubbed JSON Data

Every generated html page is required to have matching .json file in 'service/' directory. This is where you stub out data that is to be used to populate the markup templates.

## Gulp Tasks

### Watch

<pre>gulp watch;</pre>

### Deploy

This compiles and bundles everything into a deploy ready package outputed in the '_deploy/' directory.

<pre>gulp deploy
    --version=(unique deploy version)
    --www=(www domain)
    --cdn=(cdn domain)
    --service=(service domain)
    --production=(true|false);</pre>

The version argument is optional, if not specified it will set the version to an epoch timestamp.

### Unit Tests

<pre>gulp unit;</pre>

### More

These all run as dependencies of the watch and deploy tasks from above.

<pre>gulp markup;</pre>
<pre>gulp markupTemplate;</pre>
<pre>gulp style;</pre>
<pre>gulp script;</pre>
<pre>gulp sprite;</pre>
<pre>gulp accessibility;</pre>
<pre>gulp documentation;</pre>

## NPM Shrinkwrap

This project uses npm shrinkwrap to freeze npm module versions for improved project stability. More information here: https://docs.npmjs.com/cli/shrinkwrap.

## Bugs? Feature Requests?

Pull request or log a ticket :)
