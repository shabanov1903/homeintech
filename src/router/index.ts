import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainView from '../views/MainView.vue'
import AdminView from '../views/admin/AdminView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
