import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import App from './App'
import store from './store'
import router from './router'

import '@/icons'
import '@/permission'

import WujieVue from 'wujie-vue2'
import '@/components/VXETable.js'
import '@/components/index.js'
import { isAuth } from '@/utils'
Vue.prototype.$isAuth = isAuth // 权限方法

Vue.use(WujieVue)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
