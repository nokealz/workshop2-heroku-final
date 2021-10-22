import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Student from '@/components/Student.vue'
// import Page1 from '@/components/Page1.vue'
// import Page2 from '@/components/Page2.vue'
// import Members from '@/components/Members.vue'
// import Employee from '@/components/Employee.vue'
import showmember from '@/views/showmember.vue'

import {BootstrapVue , IconsPlugin} from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)

Vue.use(axios, VueAxios)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/show',
    name: 'Show',
    component: showmember
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router