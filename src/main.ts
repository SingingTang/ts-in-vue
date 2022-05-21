import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './style/index.less';

Vue.config.productionTip = false;
Vue.prototype.$static = {};
Vue.prototype.$isH5 = false;
// Vue.prototype.$loading = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
