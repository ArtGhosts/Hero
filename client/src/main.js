// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

//引入reset.css文件
import '@/assets/css/reset.css'
//引入resize.js文件
import '@/assets/js/resize.js'

//引入vantUI组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
