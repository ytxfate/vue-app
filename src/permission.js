import router from './router/index'

router.beforeEach((to, from, next) => {
  // 设置页面的 title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
