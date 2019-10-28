import router from './router/index'
import store from './store/index'
import makeUpRouters from './utils/makeUpRouters'
import { Message } from 'element-ui'
// 页面跳转时出现在浏览器顶部的进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from './utils/auth'

const whitePathList = ['/login']

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  // 设置页面的 title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 判断是否登录
  if (!getToken()) {
    // 判断请求路径是否在白名单中
    if (whitePathList.indexOf(to.path) === -1) {
      Message.error('请登录')
      next('/login')
      NProgress.done()
    } else {
      next()
    }
  } else {
    // 判断是否获取 routers
    if (store.getters.selfRouters.length <= 0) {
      await store.dispatch('user/getRouters').then(res => {
        const { response } = res
        // 替换 component
        const userRouters = makeUpRouters(response)
        // 添加 routers
        router.addRoutes(userRouters)
        router.options.routes.push(...userRouters)
        next({ ...to, replace: true })
      })
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
