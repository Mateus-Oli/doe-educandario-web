module.exports = {
  head: {
    title: 'Doe Educandario',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic' },
      { rel: 'stylesheet', href: 'https://unpkg.com/vue-material@0.7.1/dist/vue-material.css' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },
  loading: { color: 'darkgreen' },
  plugins: [
    '~plugins/vue-material'
  ],
  build: {
    vendor: [ 'axios' ]
  }
}
