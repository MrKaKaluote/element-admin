import * as types from '../mutation-types.js'

//全局状态
const state = {
  username: '',
  password: '',
  tabData: []
}

//getters 
const getters = {
  username: state => {
    return state.username
  },
  password: state => {
    return state.password
  },
  tabData: state => {
    return state.tabData
  }
}

const mutations = {
  [types.SET_USERNAME] (state, username) {
    state.username = username
  },
  [types.SET_PASSWORD] (state, password) {
  	state.password = password
  },
  [types.SET_TABDATA](state, tabData) {
    state.tabData = tabData
  }
}

export default {
  state,
  mutations,
  getters
}