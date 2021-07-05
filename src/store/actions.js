import * as types from './mutation-types'
import GetBoards from '../api/GetBoards'

export default {
  handleColor({ commit }, color) {
    commit(types.setColor, color)
  },
  toggleFlag({ commit }) {
    commit(types.setFlag)
  },
  async get({ commit }) {
    setTimeout(async () => {
      const res = await GetBoards()
      commit(types.setBoards, res)
    }, 2000);
  },
  async getBoards({ commit }) {
    try {
      const res = await fetch(' http://localhost:3000/boards')
      const data = await res.json()
      commit(types.setBoards, data)
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
        commit(types.setList, data)
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
}