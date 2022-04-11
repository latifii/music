import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
  },
  getters: {
    // getAuthModalShow: (state) => state.authModalShow,
  },
  mutations: {
    modalAuthHeader: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  actions: {},
  modules: {},
});
