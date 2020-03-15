import Vue from 'vue'
import VueRouter from 'vue-router'
import multiguard from 'vue-router-multiguard'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    redirect: 'login',
    component: require('./../views/HomePage.vue').default,
    children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: require('./../views/DashboardPage.vue').default
    },{
        path: 'post',
        name: 'post',
        component: require('./../views/PostPage.vue').default
    },{
        path: 'notif',
        name: 'notif',
        component: require('./../views/NotifPage.vue').default
    },{
        path: 'profile',
        name: 'profile',
        component: require('./../views/ProfilePage.vue').default
    }]
}, {
    path: '/login',
    name: 'login',
    component: require('./../views/LoginPage.vue').default
}, {
    path: '/register',
    name: 'register',
    component: require('./../views/RegisterPage.vue').default
}]

const router = new VueRouter({
    mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
    base: process.env.BASE_URL,
    routes
})

export default router