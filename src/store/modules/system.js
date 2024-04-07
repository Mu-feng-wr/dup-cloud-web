
import { login, getMenu } from '@/api/dup/system.js'
import Cookies from 'js-cookie'
import router from '../../router'
const getDefaultState = () => {
  return {
    dupToken: '',
    menuList: [],
    isCollapse: false
  }
}

const state = getDefaultState()
const mutations = {
  SET_DUP_TOKEN: (state, token) => {
    state.dupToken = token
  },
  SET_MENULIST: (state, menulist) => {
    state.menuList = menulist
  },
  SET_ISCOLLAPSE: (state, isCollapse) => {
    state.isCollapse = isCollapse
  }
}
const actions = {
  loginHandler({ commit }, formData) {
    return new Promise((resolve, reject) => {
      login(formData).then(res => {
        Cookies.set('dupToken', res.token)
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  getMenulist({ commit }) {
    getMenu().then(res => {
      commit('SET_MENULIST', res.menuList)
    })
  },
  logOut({ commit }) {
    // 退出登录
    Cookies.set('dupToken', '') // 清除dup token
    commit('SET_MENULIST', [])
    router.push({ path: '/login' })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
