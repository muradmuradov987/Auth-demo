import { createStore } from 'vuex'

export default createStore({
  state: {
    modal: false,
    error__modal: false,
    token: "",
    apiKey: "AIzaSyAPuL9-AiJhUIYbj4o8ADIbuhWutiahpeM",
  },

  mutations: {
    setToken(state, token) {
      state.token = token
    },
    clearToken(state) {
      state.token = ''
    }

  },
  actions: {
  },
  modules: {
  },
  getters: {
    isAuthenticated(state){
      return state.token !== ""
    }
  },
})
