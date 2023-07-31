export const state = () => ({
  users: [],
  currentPostUser: {},
})

export const getters = {
  getUsers(state) {
    return state.users
  },
  getCurrentPostUser(state) {
    return state.currentPostUser
  },
}

export const mutations = {
  setUsers(state, payload) {
    state.users = payload
  },
  setCurrentPostUser(state, payload) {
    state.currentPostUser = payload
  },
}

export const actions = {
  async fetchUsers({ commit }) {
    const response = await this.$axios.get('/users');
    const data = await response.data;
    commit('setUsers', data);
  },
  async fetchCurrentPostUser({ commit }, id) {
    const response = await this.$axios.get(`/users/${id}`);
    const data = await response.data;
    commit('setCurrentPostUser', data);
  },
}
