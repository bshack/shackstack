module.exports = {
  options: {
    separator: ';'
  },
  dist: {
    src: ['src/**/*.js'],
    dest: 'dist/<%= pkg.name %>.js'
  }
}
