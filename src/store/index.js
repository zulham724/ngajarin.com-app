import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import the auto exporter
import modules from './modules'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules,
    strict: debug,
    plugins: debug ? [createLogger()] : [] // set logger only for development
})