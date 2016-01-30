// ## Load Modules

var requireDir = require('require-dir');

// ## Load All Tasks

// all tasks are saved in individual files for maintainability, here we just pull them all in
requireDir('./gulp/tasks', {recurse: true});
