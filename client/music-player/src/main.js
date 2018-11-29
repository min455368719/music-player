// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'; //引入组件库
import 'element-ui/lib/theme-chalk/index.css'; //引入组件库的css文件

import Axios from 'axios'
Axios.defaults.baseURL= 'http://192.168.2.109:8998';

Vue.prototype.$http = Axios

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
