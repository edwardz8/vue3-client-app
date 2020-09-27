export const UserModule = {
    namespaced: true,

    state: {
        user: null
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },

    // Actions are functions used throughout application that call mutations
    actions: {
        setUser({commit}, user) {
            commit('SET_USER', user)
        }
    }
}