import { createStore } from 'vuex'
import login from './login/login'

const store = createStore({
  state: () => {
    return {
      name: 'lzg'
    }
  },
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    login
  }
})

export default store
