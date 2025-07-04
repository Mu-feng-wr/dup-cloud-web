import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import 'vxe-pc-ui/lib/style.css'
import 'vxe-table/lib/style.css'
import App from './App'
import store from './store'
import router from './router'

import '@/icons'
import '@/permission'

import '@/components/VXETable.js'
import '@/components/index.js'
import { isAuth } from '@/utils'
Vue.prototype.$isAuth = isAuth // 权限方法

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
