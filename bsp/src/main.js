import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import App from './App'
import store from './store'
import router from './router'
import '@/components/index.js'
import '@/icons'
import '@/permission'
import '@/styles/global.scss'

import '@/components/VXETable.js' // 注册vxe组件及相关方法
import 'vxe-table/lib/style.css'

Vue.use(ElementUI, { size: 'small' })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
