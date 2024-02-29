import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/index.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/view/home/index.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/view/404/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'any',
    redirect: '/404'
  }
]
