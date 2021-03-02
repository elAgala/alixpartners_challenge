import Vue from 'vue'
import Vuex from 'vuex'

// Auth simulator
import { users } from '../assets/defaultData.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null 
  },
  getters: {
    isLoggedIn: state => {
      return !!state.user
    },
    userName: state => {
      return state.user?.name
    },
    userEmail: state => {
      return state.user?.email
    }
  },
  mutations: {
    logIn(state, payload){
      const user = users.find(user => user.email == payload.email && user.password == payload.password)
      if(!user) return
      state.user = user 
    },
    logOut(state){
      state.user = null
    }
  },
})
