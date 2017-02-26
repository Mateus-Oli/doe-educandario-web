import Vue from 'vue'

if (process.BROWSER_BUILD) {
  const VueMaterial = require('vue-material')
  Vue.use(VueMaterial)
}
