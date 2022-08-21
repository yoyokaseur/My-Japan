import { createStore } from 'vuex'

export default createStore({
  state: {
    style: true
  },
  getters: {
  },
  mutations: {
    change_style(state) {
      state.style = (state.style == false);
    }
  },
  actions: {
  },
  modules: {
  }
})
