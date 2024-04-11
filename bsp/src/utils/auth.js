import Cookies from 'js-cookie'

const TokenKey = 'bspToken'

export function getBspToken() {
  return Cookies.get(TokenKey)
}

export function setBspToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeBspToken() {
  return Cookies.remove(TokenKey)
}
