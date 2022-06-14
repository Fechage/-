import useCache from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }

  // {
  //   path: '/login',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})
// 如果用户没有登陆获取token, 强制跳转登陆页面
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = useCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
