import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { setTitle } from '@/libs/util'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'

// const turnTo = (to, access, next) => {
//   if (canTurnTo(to.name, access, routes)) next()
//   // 有权限，可访问
//   else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
// }

let firstFlag = true

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  // const token = getToken()
  if (firstFlag) {
    // 第一次进入获取用户信息
    firstFlag = false
    store
      .dispatch('getMineInfo')
      .then(user => {
        next() // 已登录
      })
      .catch(() => {
        if (to.meta.requireAuth) {
          // 需要登录权限
          next({
            name: 'login',
            replace: true,
            query: { redirect: to.fullPath }
          })
        } else {
          // 不需要登录权限
          next()
        }
      })
  } else {
    if (!store.state.user.loginStatus && to.name !== LOGIN_PAGE_NAME) {
      // 未登录且要跳转的页面不是登录页
      next({
        name: LOGIN_PAGE_NAME // 跳转到登录页
      })
    } else if (!store.state.user.loginStatus && to.name === LOGIN_PAGE_NAME) {
      // 未登陆且要跳转的页面是登录页
      next() // 跳转
    } else if (store.state.user.loginStatus) {
      // 已登录且要跳转的页面是登录页
      next()
    }
  }
  // else {
  //   if (store.state.user.hasGetInfo) {
  //     turnTo(to, store.state.user.access, next)
  //   } else {
  //     store.dispatch('getUserInfo').then(user => {
  //       // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
  //       turnTo(to, user.access, next)
  //     }).catch(() => {
  //       setToken('')
  //       next({
  //         name: 'login'
  //       })
  //     })
  //   }
  // }
})

router.afterEach(to => {
  setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
