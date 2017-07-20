import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Welcome from '../components/Welcome.vue'

Vue.use(VueRouter)

export function createRouter () {
    const routes = [
        {
            path: '/',
            redirect: '/welcome' 
        },
        {
            path: '/welcome',
            component: Welcome
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/signup',
            component: Signup
        }
    ]
    const router = new VueRouter({routes});
    return router
}