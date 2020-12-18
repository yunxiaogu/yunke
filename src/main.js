import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入Element-UI
import element from './elementui/index.js'
// 样式文件必须引入
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(element)

// 导入路由
import router from './router/index.js'

// 导入状态管理Vuex
import store from './store/index.js'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
