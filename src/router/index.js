import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routerComponentMap = {
  layout: () => import('../views/Layout/index.vue'),
  home: () => import('../views/Home.vue'),
  about: () => import('../views/About.vue'),
  login: () => import('../views/Login/index.vue')
}

/* ================ route 结构
  path: 路径
  name: 名称
  component: 模板
  meta:
    title: 页面 title
  hidden: 是否隐藏此菜单
==================== */
const routes = [
  {
    path: '/',
    name: 'layout',
    component: routerComponentMap.layout,
    meta: { title: 'Layout' },
    hidden: false
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/index',
    component: routerComponentMap.layout,
    icon: 'el-icon-s-home',
    meta: { title: 'home' },
    children: [
      {
        path: 'index',
        name: 'Home',
        component: routerComponentMap.home,
        meta: { title: 'Home' },
        icon: 'el-icon-s-marketing'
      },
      {
        path: 'index2',
        name: 'Home2',
        component: routerComponentMap.home,
        meta: { title: 'Home2' },
        icon: 'el-icon-s-cooperation'
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    redirect: '/about/index',
    component: routerComponentMap.layout,
    meta: { title: 'About' },
    icon: 'el-icon-s-promotion',
    children: [
      {
        path: 'index',
        name: 'About',
        component: routerComponentMap.about,
        meta: { title: 'About' },
        icon: 'el-icon-s-shop'
      },
      {
        path: 'index2',
        name: 'About2',
        component: routerComponentMap.about,
        meta: { title: 'About2' },
        icon: 'el-icon-s-custom'
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: routerComponentMap.login,
    meta: { title: '用户登录' },
    hidden: true
  }
]

const router = new VueRouter({
  routes
})

export default router
