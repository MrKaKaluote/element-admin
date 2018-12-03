import * as types from '../mutation-types.js'

//全局状态
const state = {
  username: '',
  password: '',
  tabData: [],
  treeData: [],
  token: ''
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
  },
  treeData: state => {
    return state.treeData
  },
  token: state => {
    return state.token
  },
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
  },
  [types.SET_TREEDTA](state, treeData) {
    state.treeData = treeData
  },
  [types.SET_TOKEN](state, token) {
    state.token = token
  }
}

export default {
  state,
  mutations,
  getters
}