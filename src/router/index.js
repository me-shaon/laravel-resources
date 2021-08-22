import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Official from '../views/Official.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/official',
    name: 'Official',
    component: Official
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
