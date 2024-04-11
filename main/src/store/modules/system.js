import { login, getMenu, loginSrm, loginCms, loginBsp, loginBi, getUser } from '@/api/dup/system.js'
import router from '../../router'
import { setDupToken, removeDupToken, setSrmToken, removeSrmToken, setCmsToken, removeCmsToken, setBspToken, removeBspToken, setBiToken, removeBiToken } from '@/utils/auth.js'
import Layout from '@/layout'
const getDefaultState = () => {
  return {
    menuList: [],
    isCollapse: false,
    userInfo: {}
  }
}

const state = getDefaultState()
const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_DUP_TOKEN: (state, token) => {
    state.dupToken = token
  },
  SET_MENULIST: (state, menulist) => {
    state.menuList = menulist
  },
  SET_ISCOLLAPSE: (state, isCollapse) => {
    state.isCollapse = isCollapse
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}
const actions = {
  loginHandler({ commit, dispatch }, formData) {
    return new Promise((resolve, reject) => {
      login(formData)
        .then((res) => {
          setDupToken(res.token)
          dispatch('getMenulist')
          dispatch('getUserInfo')
          dispatch('getSrmToken', formData.username)
          dispatch('getCmsToken', formData.username)
          dispatch('getBspToken', formData.username)
          // dispatch('getBiToken', formData.username)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  getMenulist({ commit }) {
    return new Promise((resolve, reject) => {
      getMenu().then((res) => {
        commit('SET_MENULIST', res.menuList)
        const routerList = []
        menuRecursion(res.menuList, routerList)
        router.addRoutes(routerList)
        resolve()
      })
    })
  },
  getUserInfo({ commit }) {
    getUser().then((res) => {
      commit('SET_USERINFO', res.user)
    })
  },
  logOut({ commit }) {
    // 退出登录
    removeDupToken() // 清除dup token
    removeSrmToken() // 清除srm token
    removeCmsToken() // 清除cms token
    removeBspToken() // 清除bsp token
    removeBiToken() // 清除bi token
    commit('RESET_STATE')
    router.push({ path: '/login' })
  },
  getSrmToken({ commit }, userno) {
    loginSrm({ userno }).then((res) => {
      setSrmToken(res.token)
    })
  },
  getCmsToken({ commit }, userno) {
    loginCms({ userno }).then((res) => {
      setCmsToken(res.token)
    })
  },
  getBspToken({ commit }, userno) {
    loginBsp({ userno }).then((res) => {
      setBspToken(res.token)
    })
  },
  getBiToken({ commit }, userno) {
    loginBi({ userno }).then((res) => {
      setBiToken(res.token)
    })
  }
}

const menuRecursion = (list, routerList) => {
  list.forEach((item) => {
    if (item.list && item.list.length > 0) {
      menuRecursion(item.list, routerList)
    }
    // 菜单级
    if (item.type == 1) {
      routerList.push({
        path: '/' + item.url,
        component: Layout,
        name: item.url,
        meta: { title: item.name }
      })
    }
  })
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
