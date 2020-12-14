// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mock from '../mock/mock.js'//此部分引入的是我们所编写的mockjs文档
import utils from './common/utils.js';
Vue.use(utils);

import axios from 'axios'
Vue.prototype.$http = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
