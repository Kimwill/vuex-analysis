export default {
  namespaced: true,
  state: {
    age: 333
  },
  getters: {},
  mutations: {
    changeAgeSync(state, payload) {
      state.age += payload
    }
  },
  actions: {
    changeAgeAync({commit}, payload) {
      setTimeout(() => {
        commit('changeAgeSync', payload)
      }, 1000)
    }
  }
}