import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import {
  Menu,
  Submenu,
  MenuItem,
  Form,
  FormItem,
  Button,
  Message,
  Input
} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/permission'

// 引入 mock 文件
import '../mock/mock.js'

Vue.config.productionTip = false

// Element
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Input)

Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
