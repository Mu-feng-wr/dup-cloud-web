import router from './router'
import store from './store'
import NProgress from 'nprogress' // 页面访问进度条
import 'nprogress/nprogress.css' // 页面访问进度条样式
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  // 如果是生产环境直接进入子应用，那么直接跳回主应用
  if (process.env.NODE_ENV == 'production' && !window.$wujie) {
    window.location.href = process.env.VUE_APP_MAIN_URL
    return
  }
  const hasToken = getToken()
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
          const userInfo = window.$wujie.props.userInfo
          const permissions = window.$wujie.props.permissions
          const roles = window.$wujie.props.roles
          store.commit('user/SET_USERINFO', userInfo)
          store.commit('user/SET_PERMISSIONS', permissions)
          store.commit('user/SET_ROLES', roles)
          next({ path: to.redirectedFrom })
        } else {
          // 子应用单起
          try {
            const userInfo = await store.dispatch('system/getUserInfoHandler')
            store.commit('user/SET_USERINFO', userInfo.user)
            store.commit('user/SET_PERMISSIONS', userInfo.permissions)
            store.commit('user/SET_ROLES', userInfo.roles)
            next()
          } catch (err) {
            next()
          }
        }
      }
    }
  } else {
    try {
      await store.dispatch('system/loginHandler')
      next({ path: '/monitor/online' })
      NProgress.done()
    } catch (err) {
      console.log(err)
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
