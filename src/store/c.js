export default {
  namespaced: true,
  state: {
    age: 444
  },
  getters: {},
  mutations: {
    changeAgeSync(state, payload) {
      state.age += payload
    }
  },
  actions: {}
}