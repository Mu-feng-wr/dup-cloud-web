const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  menuList: state => state.system.menuList,
  isCollapse: state => state.system.isCollapse
}
export default getters
