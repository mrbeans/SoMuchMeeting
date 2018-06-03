import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/view/dashboard'
import Index from '@/view/index'
import Calendar from '@/view/calendar'
import Infrastructure from '@/view/infrastructure'
import Manager from '@/view/manager'

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
        },{
          path: '/calendar',
          name: Calendar,
          component: Calendar
        },{
          path: '/manager',
          name: Manager,
          component: Manager
        },{
          path: '/infrastructure',
          name: Infrastructure,
          component: Infrastructure
        },
      ]
    }
  ]
})
