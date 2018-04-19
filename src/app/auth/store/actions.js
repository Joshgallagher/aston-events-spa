import Vue from 'vue'

export const signup = ({ dispatch }, { payload, context }) => {
  return Vue.axios.post('http://aston-events-api.test/api/v1/register', payload)
    .then((res) => console.log(res))
    .catch((err) => {
      context.errors = err.response.data.errors
    })
}
