import Vue from 'vue'
import { isEmpty } from 'lodash'

export const setHttpToken = (token) => {
  if (isEmpty(token)) {
    Vue.axios.defaults.headers.common['Authorization'] = null
  }

  Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
