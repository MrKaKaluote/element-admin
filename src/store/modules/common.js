import * as types from '../mutation-types.js'

//全局状态
const state = {
  username: '',
  password: ''
}

//getters 
const getters = {
  username: state => {
    return state.username
  },
  password: state => {
    return state.password
  }
}

const mutations = {
  [types.SET_USERNAME] (state, username) {
    state.username = username
  },
  [types.SET_PASSWORD] (state, password) {
  	state.password = password
  }
}

export default {
  state,
  mutations,
  getters
}