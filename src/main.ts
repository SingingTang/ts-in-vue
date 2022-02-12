import Vue from './types/vue-global.d';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$static = {};
Vue.prototype.$isH5 = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
