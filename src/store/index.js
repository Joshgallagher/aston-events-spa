import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

import auth from '@/app/auth/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    auth
  }
})

export default store
