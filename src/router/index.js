import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Official from '../views/Official.vue'
import Books from '../views/Books.vue'
import Courses from '../views/Courses.vue'
import Blogs from '../views/Blogs.vue'
import People from '../views/People.vue'

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
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/people',
    name: 'People',
    component: People
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
