import useCache from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/notFound.vue')
  }
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

  if (to.path.indexOf('/main') !== -1) {
    if (to.path.name === 'notFound') {
      to.name = '/user'
    }
  }
})

export default router
