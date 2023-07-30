export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

interface IState {
  users: IUser[],
  currentPostUser: IUser
}

export const state = () => ({
  users: [] as IUser[],
  currentPostUser: {} as IUser,
} as IState)

export const getters = {
  getUsers(state: IState) {
    return state.users
  },
  getCurrentPostUser(state: IState) {
    return state.currentPostUser
  },
}

export const mutations = {
  setUsers(state: IState, payload: IUser[]) {
    state.users = payload
  },
  setCurrentPostUser(state: IState, payload: IUser) {
    state.currentPostUser = payload
  },
}

export const actions = {
  async fetchUsers({ commit }) {
    const response = await this.$axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    const data = await response.data;
    commit('setUsers', data)
  },
  async fetchCurrentPostUser({ commit }, id: number) {
    const response = await this.$axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    )
    const data = await response.data;
    commit('setCurrentPostUser', data)
  },
}
