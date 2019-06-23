// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { goTo } from './common/lib/goTo'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import installPlugin from '@/plugin'
import './index.less'
import '@/assets/icons/iconfont.css'
import 'font-awesome/css/font-awesome.css'
import TreeTable from 'tree-table-vue'
import { ajax } from './common/lib/ajax'
// 轮播以及轮播样式
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 全屏看图插件
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
// 自定义指令
import clickOutSide from './common/directives/clickOutSide'
import scrollUnique from './common/directives/scrollUnique'
// base css
import './assets/stylus/base.styl'
import './common/less/common.less'
// 转化为pdf功能
import htmlToPdf from './common/lib/htmlToPdf'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Viewer)
Vue.directive('clickOutSide', clickOutSide)
Vue.directive('scrollUnique', scrollUnique)
Vue.use(htmlToPdf)
// 路由跳转

Vue.prototype.$goto = goTo
// ajax

Vue.prototype.$ajax = ajax
// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')

iView.Form.methods.validate = function (callback) {
  let valid = true;
  let count = 0;
  let fields = this.fields;
  for (count = 0; count < fields.length; count++) {
    const field = fields[count];
    field.validate('', errors => {
      if (errors) {
        valid = false;
      }
    });
    if (!valid) {
      if (typeof callback === 'function') {
        callback(valid);
      }
      break;
    }
  }
  if (valid) {
    callback(valid);
  }
};
Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(TreeTable)
/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
