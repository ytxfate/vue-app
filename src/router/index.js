import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export const routerComponentMap = {
  layout: () => import('@/views/Layout/index.vue'),
  home: () => import('@/views/Home.vue'),
  about: () => import('@/views/About.vue'),
  login: () => import('@/views/Login/index.vue'),
  menuManager: () => import('@/views/Authority/MenuManager/index.vue')
}

/* ================ route 结构
  path: 路径
  name: 名称
  component: 模板
  meta:
    title: 页面 title
  hidden: 是否隐藏此菜单
==================== */
const publicRoutes = [
  {
    path: '/',
    name: 'layout',
    component: routerComponentMap.layout,
    meta: { title: 'Layout' },
    hidden: false
  },
  {
    path: '/login',
    name: 'login',
    component: routerComponentMap.login,
    meta: { title: '用户登录' },
    hidden: true
  }
]

const createRouter = () => new VueRouter({
  routes: publicRoutes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
