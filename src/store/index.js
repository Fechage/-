import { createStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'

const store = createStore({
  state: () => {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export default store
