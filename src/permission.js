import router from './router/index'
import store from './store/index'
import makeUpRouters from './utils/makeUpRouters'

const whitePathList = ['/login']

router.beforeEach(async (to, from, next) => {
  // 设置页面的 title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 判断是否是需要获取 routers 的路径
  // 判断是否获取 routers
  if (whitePathList.indexOf(to.path) === -1 && store.getters.selfRouters.length <= 0) {
    await store.dispatch('user/getRouters').then(res => {
      const { response } = res
      // 替换 component
      const userRouters = makeUpRouters(response)
      // 添加 routers
      router.addRoutes(userRouters)
      router.options.routes.push(...userRouters)
      next({ ...to, replace: true })
    })
  }
  next()
})
