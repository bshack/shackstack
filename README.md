#get up and running

##Dependancies

#### nodejs

http://nodejs.org/

#### compass

http://compass-style.org/install/

#### scss-lint

https://github.com/causes/scss-lint

#### java

http://support.apple.com/kb/DL1572

####cordova

http://cordova.apache.org/#download

##setup your project

####clone project

git clone https://github.com/bshack/static

####install node modules

npm install (might need to sudo)

####install bower dependancies

bower install

##run the default project

grunt watch

##run project other than default

grunt watch --site=project folder

##build deployable site

grunt build:production

##build deployable site other than default

grunt build:production --site=project folder
