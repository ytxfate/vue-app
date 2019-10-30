import { routerComponentMap } from '@/router/index'

const makeUpRouters = (routers) => {
  return routers.map(router => {
    router.component = routerComponentMap[router.component]
    if (router.children) {
      makeUpRouters(router.children)
    }
    return router
  })
}

export default makeUpRouters
