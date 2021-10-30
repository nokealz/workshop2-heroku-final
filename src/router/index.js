import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' 
import Page1 from '@/views/Page1.vue'
import Page2 from '@/views/Page2.vue' 
//import Table from '@/views/Table.vue'

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
    component: Page1
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
    
  },
  {
    path: '/Page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/Table',
    name: 'Table',
    component: () => import('../views/Table.vue')
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router