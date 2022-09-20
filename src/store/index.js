import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      is_loggedin: false,
      token: null,
      data: null
    }
  },
  mutations: {
    setLoggedStatus(state){
      state.user.is_loggedin = true
    },

    setToken(state, data){
      localStorage.setItem("token", data)
      state.user.token = data
    },

    setDataUser(state, data){
      state.user.data = data
    },
  },
  actions: {
    setDataUser({commit}, state){
      commit("setDataUser", state)
    }
  },
  getters: {
    getUserData(state){
      return state.user.data
    },

    getUserToken(state){
      if (state.user.token) {
        return state.user.token
      } else {
        return localStorage.getItem("token")
      }
    },

    getUserLoginStatus(state){
      return state.user.is_loggedin
    },
  },
  modules: {
  }
})
