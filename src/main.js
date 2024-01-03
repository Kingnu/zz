import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/rounter'
import ElementUI from 'element-ui';
axios.defaults.baseURL = 'http://localhost:8082/maven_petsystem/'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
axios.interceptors.request.use(config=>{
  //为请求头对象，添加token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem("token")
  return config;
})

Vue.config.productionTip = false
Vue.prototype.$axios = axios

import "./assets/global.css"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(VueRouter)
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
