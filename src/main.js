import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//设置全局css
import './assets/css/global.css'

import IconFontOnline from 'vue-iconfont-online';
import axios from 'axios'; 

Vue.config.productionTip = false
//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
Vue.prototype.$http =axios
Vue.use(IconFontOnline, {
  url: '//at.alicdn.com/t/c/font_3601734_zp5ku8iaz.css',
  symbol: 'hpicon-',
  fontFamily: 'iconfont',
  fontSize: 22
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
