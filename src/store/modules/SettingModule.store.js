/* Module1.store.js */
import axios from 'axios'
const fs = require('fs')

// State object
const state = {
    url: 'http://localhost:8000',
    storageUrl: 'http://localhost/8000/storage',
    settings: [],
    assets: {
        bgDashboard: require('./../../assets/bg-dashboard.jpg'),
        bgLogin: require('./../../assets/bg-login.jpg'),
        avatar: require('./../../assets/avatar.png')
    }
}

// Mutations
const mutations = {

}

// Actions
const actions = {

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