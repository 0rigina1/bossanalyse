import Vue from 'vue'
import Vuex from 'vuex'
import VuexAlong from 'vuex-along'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        auth: null
    },
    getters: {},
    mutations: {
        setAuth(state, val) {
            state.auth = val
        },
    },
    actions: {
        setAuth({commit}, val) {
            commit('setAuth', val)
        },
    },
    modules: {},
    plugins: [VuexAlong({
        name: 'store',
        session: {list: [], isFilter: true},
        justSession: true
    })]
})
