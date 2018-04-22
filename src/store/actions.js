import Vue from 'vue'

export const getCategories = ({ dispatch, commit }) => {
  return Vue.axios.get('http://aston-events-api.test/api/v1/categories')
    .then((res) => {
      commit('setCategories', res.data.data)
    })
}
