import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';
// eslint-disable-next-line no-unused-vars
import Raleway from './assets/fonts/raleway-regular.ttf';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
