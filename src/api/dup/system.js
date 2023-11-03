import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/dup-cloud//sys/login',
    method: 'post',
    data
  })
}
