import request from '@/utils/request'

/** 登录 */
export function login(data) {
  return request({
    url: '/dup-cloud/sys/login',
    method: 'post',
    data
  })
}

/** 获取菜单 权限 */
export function getMenu(params) {
  return request({
    url: '/dup-cloud/sys/menu/nav',
    method: 'get',
    params
  })
}

/** 获取登录用户信息 */
export function getUser(params) {
  return request({
    url: '/dup-cloud/sys/user/info',
    method: 'get',
    params
  })
}

/** 登出 */
export function logout(data) {
  return request({
    url: '/dup-cloud/sys/logout',
    method: 'post',
    data
  })
}

/** 获取srm token */
export function loginSrm(params) {
  return request({
    url: '/srm-cloud/sys/token',
    method: 'get',
    params
  })
}
/** 获取cms token */
export function loginCms(params) {
  return request({
    url: '/cms-cloud/sys/token',
    method: 'get',
    params
  })
}
/** 获取bsp token */
export function loginBsp(params) {
  return request({
    url: '/bsp-cloud/sys/token',
    method: 'get',
    params
  })
}
/** 获取bi token */
export function loginBi(params) {
  return request({
    url: '/bi-cloud/sys/token',
    method: 'get',
    params
  })
}
