// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'es6-promise/auto';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { sync } from 'vuex-router-sync';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import apis from '@/apis';
import utils from '@/plugins/utils';
import '@/components/message';
import 'normalize.css';

sync(store, router);

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$apis = apis;
Vue.prototype.$utils = utils;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
