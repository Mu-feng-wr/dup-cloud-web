import Cookies from 'js-cookie'

const dupTokenKey = 'dupToken'
const srmTokenKey = 'srmToken'
const cmsTokenKey = 'cmsToken'
const bspTokenKey = 'bspToken'
const biTokenKey = 'biToken'

/** dup token操作 */
export function getDupToken() {
  return Cookies.get(dupTokenKey)
}

export function setDupToken(token) {
  return Cookies.set(dupTokenKey, token)
}

export function removeDupToken() {
  return Cookies.remove(dupTokenKey)
}

/** srm token操作 */
export function getSrmToken() {
  return Cookies.get(srmTokenKey)
}

export function setSrmToken(token) {
  return Cookies.set(srmTokenKey, token)
}

export function removeSrmToken() {
  return Cookies.remove(srmTokenKey)
}

/** cms token操作 */
export function getCmsToken() {
  return Cookies.get(cmsTokenKey)
}

export function setCmsToken(token) {
  return Cookies.set(cmsTokenKey, token)
}

export function removeCmsToken() {
  return Cookies.remove(cmsTokenKey)
}

/** bsp token操作 */
export function getBspToken() {
  return Cookies.get(bspTokenKey)
}

export function setBspToken(token) {
  return Cookies.set(bspTokenKey, token)
}

export function removeBspToken() {
  return Cookies.remove(bspTokenKey)
}

/** bi token操作 */
export function getBiToken() {
  return Cookies.get(biTokenKey)
}

export function setBiToken(token) {
  return Cookies.set(biTokenKey, token)
}

export function removeBiToken() {
  return Cookies.remove(biTokenKey)
}
