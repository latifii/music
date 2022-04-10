import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: true,
  },
  getters: {},
  mutations: {
    modalAuthHeader: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  actions: {},
  modules: {},
});
