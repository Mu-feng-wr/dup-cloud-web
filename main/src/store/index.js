import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import settings from './modules/settings'
import user from './modules/user'
import system from './modules/system'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    settings,
    user,
    system
  },
  getters
})

export default store
