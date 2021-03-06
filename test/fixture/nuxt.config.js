let tmpdir = __dirname + '/../tmp'

module.exports = {
  srcDir: __dirname,
  buildDir: tmpdir + '/nuxt-build',
  dev: false,
  modules: [
    ['@@', {
      languages: ['en', 'de']
    }]
  ],
  generate: {
    dir: tmpdir + '/nuxt-generate',
    routes: [
      '/dynamic/44'
    ]
  }
}
