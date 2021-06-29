import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: [],
    list: {}
  },
  mutations: {
    setBoards(state, payload) {
      state.boards = payload
    },
    setList(state, payload) {
      state.list = payload
    }
  },
  actions: {
    async getBoards({ commit }) {
      try {
        const res = await fetch(' http://localhost:3000/boards')
        const data = await res.json()
        commit('setBoards', data)
      }
      catch (err) {
        console.log(err);
      }
    },
    async getList({ commit }, id) {
      try {
        const res = await fetch(`http://localhost:3000/boards/${id}`)
        const data = await res.json()
        commit('setList', data)
      }
      catch (err) {
        console.log(err);
      }
    },
  },
  modules: {
  }
})
