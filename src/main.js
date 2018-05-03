// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import axios from 'axios'
import VueAxios from 'vue-axios'
import localforage from 'localforage'
import InstantSearch from 'vue-instantsearch'

import './assets/sass/main.sass'

Vue.use(Buefy)
Vue.use(VueAxios, axios)
Vue.use(InstantSearch)

Vue.prototype.$eventBus = new Vue()

localforage.config({
  driver: localforage.LOCALSTORAGE
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mounted () {
    store.dispatch('auth/setToken')
      .then(() => {
        store.dispatch('auth/fetchUser')
          .catch(() => {
            store.dispatch('auth/clearAuth')
              .then(() => router.replace({ name: 'event-index' }))
          })
      })
  },
  router,
  store,
  components: { App },
  template: '<App/>'
})
