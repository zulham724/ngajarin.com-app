/* Module1.store.js */

// State object
const state = {
    auth: JSON.parse(localStorage.getItem('auth')),
    client_id: 2,
    client_secret: 'QnQD8LU6FzZbb2OgTWrIgjYDpbl2h74bGYI8yf9q',
}

// Mutations
const mutations = {
    auth_success(state, payload) {
        state.token = payload.token
        state.auth = payload.auth
        localStorage.setItem("token", JSON.stringify(payload.token))
        localStorage.setItem("user", JSON.stringify(payload.auth))
    },
    setAuth(state, payload) {
        state.auth = payload.auth
        localStorage.setItem('auth', JSON.stringify(payload.auth))
    },
}

// Actions
const actions = {
    login({ commit }, credential) {
        return new Promise((resolve, reject) => {
            const access = {
                grant_type: "password",
                client_id: this.state.client_id,
                client_secret: this.state.client_secret,
                ...credential
            }
            axios
                .post(`${this.state.url}/oauth/token`, access)
                .then(resp => {
                    const token = resp.data
                    axios.defaults.headers.common.Accept = "application/json"
                    axios.defaults.headers.common.Authorization = `${token.token_type} ${token.access_token}`
                    axios
                        .get(`${this.state.url}/api/user`)
                        .then(res => {
                            const auth = res.data
                                // Add the following line:
                            const payload = {
                                token: token,
                                auth: auth
                            }
                            commit("auth_success", payload)
                            resolve(resp)
                        })
                        .catch(err => {
                            reject(err)
                        })
                })
                .catch(err => {
                    reject(err)
                    localStorage.clear()
                })
        })
    },
}

// Getter functions
const getters = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}