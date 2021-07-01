import Vue from 'vue'
import Vuex from 'vuex'
import GetBoards from '../api/GetBoards'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: [],
    list: {},
    flag: false,
    color: ''
  },
  mutations: {
    setBoards(state, payload) {
      state.boards = payload
    },
    setList(state, payload) {
      state.list = payload
    },
    setFlag(state) {
      state.flag = !state.flag
    },
    setColor(state, payload){
      console.log(payload);
      state.color = payload
    }
  },
  actions: {
    handleColor({commit}, color) {
      console.log(color);
      commit('setColor', color)
    },
    toggleFlag({commit}) {
      commit('setFlag')
    },
    async get({ commit }) {
      setTimeout(async () => {
        const res = await GetBoards()
        commit('setBoards', res)
      }, 2000);
    },
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
    getList({ commit }, id) {
      setTimeout(async () => {
        try {
          const res = await fetch(`http://localhost:3000/boards/${id}`)
          const data = await res.json()
          commit('setList', data)
        }
        catch (err) {
          console.log(err);
        }
      }, 1000);
    },
    async postNewBoard({ commit }, board) {
      try {
        const OPTS = {
          method: "POST",
          body: JSON.stringify(board),
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch("http://localhost:3000/boards", OPTS);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteBoard({ commit }, id) {
      const OPTS1 = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        await fetch(`http://localhost:3000/boards/${id}`, OPTS1);
      } catch (err) {
        console.log(err);
      }
    }
  },
  modules: {
  }
})
