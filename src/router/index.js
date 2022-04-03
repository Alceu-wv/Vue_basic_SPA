import { createRouter, createWebHistory } from 'vue-router'
import ActorForm from '../views/ToDoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ActorForm
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
