import Vue from 'vue'
import Router from 'vue-router'

import routes from '@/app/routes'
import authorizedMiddleware from './middleware/authorizedMiddleware'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach(authorizedMiddleware)

export default router
