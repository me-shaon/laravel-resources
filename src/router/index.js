import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
