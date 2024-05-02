import store from '@/store'

/**
 * 是否有权限
 * @param {*} key
 */
export function isAuth (key) {
  return store.getters.permissions.includes(key) || false
}
