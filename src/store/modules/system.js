import { login, getMenu, loginSrm, loginCms, loginBsp, loginBi, getUser } from '@/api/dup/system.js'
import router from '../../router'
import { setDupToken, removeDupToken, setSrmToken, removeSrmToken, setCmsToken, removeCmsToken, setBspToken, removeBspToken, setBiToken, removeBiToken } from '@/utils/auth.js'
import Layout from '@/layout'
const getDefaultState = () => {
  return {
    menuList: [],
    isCollapse: false,
    userInfo: {},
    permissions: []
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
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions
  }
}
const actions = {
  loginHandler ({ commit, dispatch }, formData) {
    return new Promise((resolve, reject) => {
      login(formData)
        .then((res) => {
          setDupToken(res.token)
          dispatch('getMenulist')
          dispatch('getUserInfo')

          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  getMenulist ({ commit }) {
    return new Promise((resolve, reject) => {
      getMenu().then((res) => {
        commit('SET_MENULIST', [{ name: '首页', icon: 'shouye', url: 'home' }, ...res.menuList])
        commit('SET_PERMISSIONS', res.permissions)
        const routerList = []
        menuRecursion(res.menuList, routerList)
        router.addRoutes(routerList)
        resolve()
      })
    })
  },
  getUserInfo ({ commit, dispatch }) {
    getUser().then((res) => {
      dispatch('getSrmToken', res.user.userNo)
      dispatch('getCmsToken', res.user.userNo)
      dispatch('getBspToken', res.user.userNo)
      commit('SET_USERINFO', res.user)
    })
  },
  logOut ({ commit }) {
    // 退出登录
    removeDupToken() // 清除dup token
    removeSrmToken() // 清除srm token
    removeCmsToken() // 清除cms token
    removeBspToken() // 清除bsp token
    removeBiToken() // 清除bi token
    commit('RESET_STATE')
    router.push({ path: '/login' })
  },
  getSrmToken ({ commit }, userno) {
    loginSrm({ userno }).then((res) => {
      setSrmToken(res.token)
    })
  },
  getCmsToken ({ commit }, userno) {
    loginCms({ userno }).then((res) => {
      setCmsToken(res.token)
    })
  },
  getBspToken ({ commit }, userno) {
    loginBsp({ userno }).then((res) => {
      setBspToken(res.token)
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
      const module = item.url.split('/').slice(0, 1)
      routerList.push({
        path: '/' + item.url,
        component: Layout,
        name: item.url,
        meta: { title: item.name, module: module.join('/') }
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
