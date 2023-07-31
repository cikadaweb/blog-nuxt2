

export const state = () => ({
  loading: false,
  alert: {
    info: null,
    status: ''
  }
})

export const getters = {
  getLoading(state) {
    return state.loading;
  },
  getAlert(state) {
    return state.alert;
  },
}

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },
  setAlertInfo(state, {info, status}) {
    state.alert.info = info;
    state.alert.status = status;
  },
  clearAlert(state) {
    state.alert.info = null;
    state.alert.status = '';
  },
}

export const actions = {
  changeAlertStatus({ commit }, alertInfo) {
    commit('setAlertInfo', {info: alertInfo.info, status: alertInfo.status});
    setTimeout(() => {
      commit('clearAlert');
    }, 5000);
  },
}
