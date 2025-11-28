import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { getComponents } from './asyncRouter'

const asyncRouter = getComponents()
asyncRouter.push({
  path: '/',
  name: 'MainLayout',
  redirect: '/HomePage',
  component: () => import('@/layouts/MainLayout.vue'),
  children: [
    {
      path: '/HomePage',
      name: 'HomePage',
      component: () => import('@/views/HomePage.vue'),
    },
  ],
})
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: asyncRouter,
})

export default router
