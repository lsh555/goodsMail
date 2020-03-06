import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import 'vant/lib/index.css';
Vue.use(Vant);

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import toast from './components/common/toast'
// 安装toast插件,就是点击出来吐丝
Vue.use(toast)

//解决移动端300ms延迟
FastClick.attach(document.body)

//图片懒加载,loading是图片没加载出来时显示的图片
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/老詹.jpeg')
})

Vue.config.productionTip = false
Vue.prototype.axios =axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
