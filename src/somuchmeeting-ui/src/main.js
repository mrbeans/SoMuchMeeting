// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import FullCalendar from 'vue-fullcalendar'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/site.css'

Vue.component('full-calendar', FullCalendar)

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
/* eslint-disable */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
