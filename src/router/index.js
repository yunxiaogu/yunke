import Vue from 'vue'
// 1 导入插件
import Router from 'vue-router'

// 2 安装插件
Vue.use(Router)

const Home = () => import('../views/home/Home')
const Find = () => import('../views/find/Find')
const Hotspot = () => import('../views/hotspot/Hotspot')
const Login = () => import('../views/login/Login')
const Regist = () => import('../views/regist/Regist')
const Write = () => import('../views/write/Write')

// 3 创建Router实例
const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'find',
    path: '/find',
    component: Find
  },
  {
    name: 'hotspot',
    path: '/hotspot',
    component: Hotspot
  },
  {
    name: 'write',
    path: '/write',
    component: Write
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'regist',
    path: '/regist',
    component: Regist
  }
]
const router = new Router({
  routes,
  base: '/'
  mode: 'history'
})

// 注册全局前置守卫
// router.beforeEach((to, from, next) => {
//   if (to.path == from.path) {
//     next(false)
//   } else {
//     next()
//   }
// })


// 4 导出Router实例
export default router
