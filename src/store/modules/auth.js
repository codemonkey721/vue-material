import request from '@/util/request'

const state = {
  access_token: null,
  expires_in: 3600,
  token_type: 'bearer',
  username: null,
  avatar: null,
  status: 'online'
}
const getters = {
  getAccessToken: (state) => {
    return state.access_token
  },
  getAvatar: (state) => state.avatar,
  getUsername: (state) => state.username,
  getUserStatus: (state) => state.status
}
const actions = {
  login({ commit, dispatch }, { username, password }) {
    return request({
      url: '/auth/login',
      method: 'post',
      data: {
        username,
        password
      }
    }).then((resp) => {
      commit('SET_LOGIN', resp)
      dispatch('fetchProfile')
    })
  },
  register({ commit, dispatch }, data) {
    return request({
      url: '/auth/register',
      method: 'post',
      data: data
    }).then((resp) => {
      commit('SET_LOGIN', resp)
      dispatch('fetchProfile')
      return resp
    })
  },
  logout({ commit }) {
    commit('SET_ACCESS_TOKEN', null)
  },
  // get current login user info

  fetchProfile({ commit }) {
    return request({
      url: '/me',
      method: 'get'
    }).then(({ data }) => {
      commit('SET_LOGIN_PROFILE', data)
    })
  }
}
const mutations = {
  SET_LOGIN(state, { access_token, expires_in }) {
    state.access_token = access_token
    state.expires_in = expires_in
  },
  SET_ACCESS_TOKEN(state, token) {
    state.access_token = token
  },
  SET_LOGIN_PROFILE(state, payload) {
    state.username = payload.username
    state.avatar = payload.avatar
  },
  UPDATE_SELF_STATUS(state, status) {
    state.status = status
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
