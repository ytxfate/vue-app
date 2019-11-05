import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import {
  Menu, Submenu, MenuItem, Form, FormItem, Button, Message, Input,
  Row, Col, Select, Option, Table, Dialog, TableColumn
} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/permission'

// css 文件
import 'animate.css'
import 'element-ui/lib/theme-chalk/index.css'

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
Vue.use(Row)
Vue.use(Col)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(Dialog)
Vue.use(TableColumn)

Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
