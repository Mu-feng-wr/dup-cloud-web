import router from './router'
import store from './store'
import NProgress from 'nprogress' // 页面访问进度条
import 'nprogress/nprogress.css' // 页面访问进度条样式
import { getBspToken } from '@/utils/auth'
const whiteList = ['/login'] // 白名单
const isWujie = !!window.$wujie

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  const hasToken = getBspToken()
  const menuList = store.getters.menuList
  const hasGetUserInfo = store.getters.userInfo

  if (hasToken) {
    if (isWujie) {
      console.log('有主应用')
      next()
    } else {
      if (to.path === '/login') {
        next({ path: '/' })
        NProgress.done()
      } else {
        if (menuList.length == 0) {
          // 获取菜单
          await store.dispatch('system/getMenuList')
        }
        if (!hasGetUserInfo.id) {
          // 获取个人信息
          await store.dispatch('system/getUser')
        }
        next()
      }
    }
  } else {
    if (isWujie) {
      console.log('有主应用')
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next(`/login`)
        NProgress.done()
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
