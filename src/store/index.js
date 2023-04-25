import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        auth: null
    },
    getters: {
        isAuthenticated(state) {
            return state.auth !== null
        }
    },
    mutations: {
        setAuth(state, val) {
            state.auth = val
        },
    },
    actions: {
        setAuth({ commit }, val) {
            commit('setAuth', val)
        },
    },
    modules: {}
})
