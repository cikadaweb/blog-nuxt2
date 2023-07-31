
export const state = () => ({
  posts: [],
  currentPost: {},
  currentPostComments: []
})

export const getters = {
  getPosts(state) {
    return state.posts;
  },
  getCurrentPost(state) {
    return state.currentPost;
  },
  getCurrentPostComments(state) {
    return state.currentPostComments;
  },
}

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload;
  },
  setCurrentPost(state, payload) {
    state.currentPost = payload;
  },
  setCurrentPostComments(state, payload) {
    state.currentPostComments = payload;
  },
}

export const actions = {
  async fetchPosts({ commit }) {
    const response = await this.$axios.get('/posts');
    const data = await response.data;
    commit('setPosts', data);
  },
  async fetchPostsByUserId({ commit, dispatch }, id) {
    const response = await this.$axios.get(`/posts?userId=${id}`);
    const data = await response.data;
    await dispatch('common/changeAlertStatus', { info: 'Посты данного пользователя были загружены', status: 'success' }, { root: true });
    commit('setPosts', data);
  },
  async fetchCurrentPost({ commit, dispatch }) {
    const response = await this.$axios.get(`/posts/${id}`);
    const data = await response.data;
    await dispatch('users/fetchCurrentPostUser', data.userId, { root: true });
    await dispatch('fetchCurrentPostComments', data.id);
    commit('setCurrentPost', data);
  },
  async fetchCurrentPostComments({ commit }, id) {
    const response = await this.$axios.get(`/posts/${id}/comments`);
    const data = await response.data;
    commit('setCurrentPostComments', data);
  },
}
