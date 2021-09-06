import { createRouter, createWebHistory } from 'vue-router'
import Modal from '../views/Modal.vue'
import Drawer from '@/views/Drawer.vue'

const routes = [
  {
    path: '/',
    name: 'Modal',
    component: Modal,
  },
  {
    path: '/list',
    name: 'List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/List.vue'),
  },
  {
    path: '/drawer',
    name: Drawer,
    component: Drawer,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
