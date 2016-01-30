# shackstack

[![Build Status](https://travis-ci.org/bshack/shackstack.svg?branch=master)](https://travis-ci.org/bshack/shackstack)

Scaffolding for developing and deploying static sites.

##get up and running

###Dependancies

#### nodejs

http://nodejs.org

#### gulp

http://gulpjs.com

##setup your project

###clone project

<pre>git clone https://github.com/bshack/shackstack</pre>

###install node modules

<pre>npm install; (might need to sudo)</pre>

##where things are located

###site source files

By default all the site source files are located in the 'app/' directory.

###stubbed out site json data files

Every server side generated html page is required to have matching .json file in 'service/' directory of your site. That is where you would stub out data that is used to populate the handlebars templates.

###npm shrinkwrap

This project uses npm shrinkwrap to freeze npm module versions for improved project stability. More information here: https://docs.npmjs.com/cli/shrinkwrap

##gulp commands

###run the default project

<pre>gulp watch;</pre>

###build deployable site
<pre>gulp deploy
    --version=(unique deploy version)
    --www=(www domain)
    --cdn=(cdn domain)
    --service=(service domain)
    --production=(true|false);</pre>

The version argument is optional, if not specified it will set the version to an epoch timestamp.

###write documentation

<pre>gulp documentation;</pre>

###build sprite from .svg images

<pre>gulp sprite;</pre>

###run unit tests

<pre>gulp unit;</pre>

## bugs, features requests?

Please log the bug/request and I will look at it, or better yet do a pull request :)
