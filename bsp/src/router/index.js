import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'
import pm from './page/pm.js'
Vue.use(Router)

export const constantRoutes = [
  {
    path: '/bspweb',
    component: Layout,
    children: [
      ...pm
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', icon: 'home' }
      },
      {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
      }
    ]
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
