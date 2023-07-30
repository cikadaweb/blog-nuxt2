export interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface IComment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

interface IState {
  posts: IPost[],
  currentPost: IPost,
  currentPostComments: IComment[],
}

export const state = () => ({
  posts: [] as IPost[],
  currentPost: {} as IPost,
  currentPostComments: [] as IComment[]
} as IState)

export const getters = {
  getPosts(state: IState) {
    return state.posts;
  },
  getCurrentPost(state: IState) {
    return state.currentPost;
  },
  getCurrentPostComments(state: IState) {
    return state.currentPostComments;
  },
}

export const mutations = {
  setPosts(state: IState, payload: IPost[]) {
    state.posts = payload;
  },
  setCurrentPost(state: IState, payload: IPost) {
    state.currentPost = payload;
  },
  setCurrentPostComments(state: IState, payload: IComment[]) {
    state.currentPostComments = payload;
  },
}

export const actions = {
  async fetchPosts({ commit }) {
    const response = await this.$axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const data: IPost[] = await response.data;
    commit('setPosts', data);
  },
  async fetchPostsByUserId({ commit, dispatch }, id: number) {
    const response = await this.$axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const data: IPost[] = await response.data;
    await dispatch('common/changeAlertStatus', { info: 'Посты данного пользователя были загружены', status: 'success' }, { root: true });
    commit('setPosts', data);
  },
  async fetchCurrentPost({ commit, dispatch }, id: number) {
    const response = await this.$axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data: IPost = await response.data;
    await dispatch('users/fetchCurrentPostUser', data.userId, { root: true });
    await dispatch('fetchCurrentPostComments', data.id);
    commit('setCurrentPost', data);
  },
  async fetchCurrentPostComments({ commit }, id: number) {
    const response = await this.$axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const data: IComment[] = await response.data;
    commit('setCurrentPostComments', data);
  },
}
