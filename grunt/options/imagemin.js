module.exports = {
    deploy: {
        options: {
            optimizationLevel: 7
        },
        files: [{
            expand: true,
            cwd: './app/image/',
            src: [
                '*.{png,jpg,gif,ico}',
                '**/*.{png,jpg,gif,ico}'
            ],
            dest: './app/image-dest/'
        }]
    }
};
