import Mock from 'mockjs'

Mock.mock('/api/user/get_routers', 'post', (data) => {
  return {
    'code': 200,
    'isSuccess': true,
    'msg': '请求成功',
    'response': [
      {
        path: '/home',
        name: 'Home',
        redirect: '/home/index',
        component: 'layout',
        icon: 'el-icon-s-home',
        meta: { title: 'home' },
        children: [
          {
            path: 'index',
            name: 'Home1',
            component: 'home',
            meta: { title: 'Home' },
            icon: 'el-icon-s-marketing'
          },
          {
            path: 'index2',
            name: 'Home2',
            component: 'home',
            meta: { title: 'Home2' },
            icon: 'el-icon-s-cooperation'
          }
        ]
      },
      {
        path: '/about',
        name: 'About',
        redirect: '/about/index',
        component: 'layout',
        meta: { title: 'About' },
        icon: 'el-icon-s-promotion',
        children: [
          {
            path: 'index',
            name: 'About1',
            component: 'about',
            meta: { title: 'About' },
            icon: 'el-icon-s-shop'
          },
          {
            path: 'index2',
            name: 'About2',
            component: 'about',
            meta: { title: 'About2' },
            icon: 'el-icon-s-custom'
          }
        ]
      }
    ]
  }
})

Mock.mock('/api/user/login', 'post', (data) => {
  const { username } = JSON.parse(data.body)
  if (username === 'admin') {
    return {
      'code': 200,
      'isSuccess': true,
      'msg': '请求成功',
      'response': {
        'jwt': 'admin-token'
      }
    }
  } else if (username === 'user') {
    return {
      'code': 200,
      'isSuccess': true,
      'msg': '请求成功',
      'response': {
        'jwt': 'user-token'
      }
    }
  } else {
    return {
      'code': 200,
      'isSuccess': true,
      'msg': '请求成功',
      'response': {
        'jwt': 'guest-token'
      }
    }
  }
})
