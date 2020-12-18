import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建Store对象
const state = {
  // 主页是否显示导航栏，默认显示
  homeNavBarShow: true
}
const store = new Vuex.Store({
  state,
  mutations: {
    homeNavBarShow(state, payload) {
      state.homeNavBarShow = payload
    }
  }
})

// 导出实例
export default store
