import * as types from './mutation-types'

export default {
    [types.setBoards](state, payload) {
        state.boards = payload
    },
    [types.setList](state, payload) {
        state.list = payload
    },
    [types.setFlag](state) {
        state.flag = !state.flag
    },
    [types.setColor](state, payload) {
        state.color = payload
    }
}