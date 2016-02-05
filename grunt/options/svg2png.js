var config = require('../gulp/config');
console.log(config);
module.exports = {
    svg2png: {
        all: {
            files: [
                {
                    cwd: 'img/',
                    src: ['**/*.svg'],
                    dest: 'img/png/'
                }
            ]
        }
    }
};
