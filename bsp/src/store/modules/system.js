import { login, getMenu, getUserInfo } from '@/api/system.js'
import { setBspToken, removeBspToken } from '@/utils/auth'
import router from '../../router'
import Layout from '@/layout'
const getDefaultState = () => {
  return {
    menuList: [],
    permissions: [],
    userInfo: {},
    keepPage: []
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
  },
  SET_KEEPPAGE: (state, keepPage) => {
    state.keepPage = keepPage
  }
}

const actions = {
  async loginHandler ({ dispatch }, formData) {
    try {
      const res = await login(formData)
      setBspToken(res.token)
      await dispatch('getMenuList')
      return Promise.resolve()
    } catch (err) {
      return Promise.reject()
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
        resolve()
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

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
