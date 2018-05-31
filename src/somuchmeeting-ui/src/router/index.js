import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/view/dashboard'
import Index from '@/view/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard,
      children: [
        {
          path: '/',
          name: Index,
          component: Index
        }
      ]
    }
  ]
})
