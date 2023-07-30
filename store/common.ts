export interface IAlert {
  info: null | string,
  status: 'success' | 'danger' | 'warning' | ''
}

interface IState {
  loading: boolean,
  alert: IAlert,
}

export const state = () => ({
  loading: false,
  alert: {
    info: null,
    status: '' as 'success' | 'danger' | 'warning' | ''
  } as IAlert
} as IState)

export const getters = {
  getLoading(state: IState) {
    return state.loading;
  },
  getAlert(state: IState) {
    return state.alert;
  },
}

export const mutations = {
  setLoading(state: IState, payload: boolean) {
    state.loading = payload;
  },
  setAlertInfo(state: IState, {info, status}: IAlert) {
    state.alert.info = info;
    state.alert.status = status;
  },
  clearAlert(state: IState) {
    state.alert.info = null;
    state.alert.status = '';
  },
}

export const actions = {
  changeAlertStatus({ commit }, alertInfo: IAlert) {
    commit('setAlertInfo', {info: alertInfo.info, status: alertInfo.status});
    setTimeout(() => {
      commit('clearAlert');
    }, 5000);
  },
}
