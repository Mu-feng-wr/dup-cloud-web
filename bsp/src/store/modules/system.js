import { login, getMenu, getUserInfo } from '@/api/system.js'
import { setBspToken, removeBspToken } from '@/utils/auth'
import router from '../../router'
import Layout from '@/layout'
const getDefaultState = () => {
  return {
    menuList: [],
    permissions: [],
    userInfo: {}
  }
}

const state = getDefaultState()

const mutations = {
  SET_MUNULIST: (state, muneList) => {
    state.menuList = muneList
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {
  async loginHandler ({ commit }, formData) {
    try {
      const res = await login(formData)
      setBspToken(res.token)
      const menuRes = await getMenu()
      commit('SET_MUNULIST', menuRes.menuList)
      commit('SET_PERMISSIONS', menuRes.permissions)
      createdRouter(menuRes.menuList)
      router.addRoutes(
        [
          {
            path: '/',
            component: Layout,
            redirect: routerList[0].path,
            children: routerList
          }
        ]
      )
      return Promise.resolve(res)
    } catch (err) {
      return Promise.reject(err)
    }
  },
  loginOutHandler ({ commit }) {
    removeBspToken()
    commit('SET_MUNULIST', [])
    commit('SET_PERMISSIONS', [])
    router.push('/login')
  },
  getMenuList ({ commit }) {
    return new Promise((resolve, reject) => {
      getMenu().then(res => {
        commit('SET_MUNULIST', res.menuList)
        commit('SET_PERMISSIONS', res.permissions)
        createdRouter(res.menuList)
        router.addRoutes(
          [
            {
              path: '/',
              component: Layout,
              redirect: routerList[0].path,
              children: routerList
            }
          ]
        )
        resolve(routerList)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getUser ({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(res => {
        commit('SET_USERINFO', res.user)
        resolve()
      })
    })
  }
}

var routerList = []
function createdRouter (menuList) {
  if (menuList && menuList.length > 0) {
    menuList.forEach(item => {
      if (item.list && item.list.length > 0) {
        createdRouter(item.list)
      }
      if (item.url) {
        try {
          const component = require(`@/views/${item.url}/index.vue`)
          routerList.push({
            component: component.default,
            path: item.url,
            name: item.url
          })
        } catch (err) {
          routerList.push({
            component: require('@/views/404.vue').default,
            path: item.url,
            name: item.url
          })
        }
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
