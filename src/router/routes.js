import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard/Dashboard.vue'

console.log(import.meta.url)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/user',
    name: 'User',
    component:()=> import('../views/User/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router