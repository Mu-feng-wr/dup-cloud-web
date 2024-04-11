import router from './router'
import store from './store'
import NProgress from 'nprogress' // 页面访问进度条
import 'nprogress/nprogress.css' // 页面访问进度条样式
import { getBspToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  const hasToken = getBspToken()
  if (hasToken) {
    if (to.path === '/') {
      next({ path: '/monitor/online' })
    } else {
      const hasGetUserInfo = store.getters.userInfo
      if (hasGetUserInfo.userId) {
        next()
      } else {
        if (window.$wujie) {
          // 有主应用时

          next({ path: to.redirectedFrom })
        } else {
          // 子应用单起
          try {
            next()
          } catch (err) {
            next()
          }
        }
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
