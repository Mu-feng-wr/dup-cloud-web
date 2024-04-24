import router from './router'
import store from './store'
import NProgress from 'nprogress' // 页面访问进度条
import 'nprogress/nprogress.css' // 页面访问进度条样式
import { getBspToken } from '@/utils/auth'

const isWujie = !!window.$wujie
console.log(isWujie)
NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  const hasToken = getBspToken()
  if (hasToken) {
    if (to.path === '/') {
      next({ path: '/home' })
    } else {
      const hasGetUserInfo = store.getters.userInfo
      if (hasGetUserInfo.userId) {
        next()
      } else {
        console.log(123)
      }
    }
  } else {
    try {
      next()
      NProgress.done()
    } catch (err) {
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
