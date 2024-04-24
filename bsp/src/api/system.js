import request from '@/utils/request'

/** 登录系统 */
export function login (data) {
  return request({
    url: '/bsp-cloud/sys/login',
    method: 'post',
    data
  })
}

/** 获取菜单 */
export function getMenu (params) {
  return request({
    url: '/bsp-cloud/sys/menu/nav',
    method: 'get',
    params
  })
}

/** 获取字典表数据 */
export function getDicItemList (params) {
  return request({
    url: '/bsp-cloud/sys/sysdictionaryitems/getDicItemList',
    method: 'get',
    params
  })
}

/** 获取操作指引 */
export function getOperateinstructionList (params) {
  return request({
    url: '/bsp-cloud/sys/sysoperateinstruction/list',
    method: 'get',
    params
  })
}

/** 查询权限列表二级菜单 */
export function getSecondMenuList (params) {
  return request({
    url: '/bsp-cloud/sys/sysdatapermission/getSecondMenuList',
    method: 'get',
    params
  })
}

export function getSysorganizationList (params) {
  return request({
    url: '/bsp-cloud/sys/sysorganization/list',
    method: 'get',
    params
  })
}

/** 获取工程管理部列表 */
export function getListType (params) {
  return request({
    url: '/bsp-cloud/sys/sysorganization/listType',
    method: 'get',
    params
  })
}
/** 考核--获取工程管理部列表 */
export function listEngineeOrg (params) {
  return request({
    url: '/bsp-cloud/sys/sysorganization/listEngineeOrg',
    method: 'get',
    params
  })
}
/** 获取个人信息 */
export function getUserInfo (params) {
  return request({
    url: '/bsp-cloud/sys/user/info',
    method: 'get',
    params
  })
}

