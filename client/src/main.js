// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

/* eslint-disable no-new */

//引入axios发起请求
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

//引入VueX状态管理
import VueX from  'vuex'
import ShopsInfor from './VuexModule/NearbyShopsInfor'
Vue.use(VueX);
const store= new VueX.Store({
  modules:{
    shopsInfor:ShopsInfor,
  }

});

// 挂载
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

});
