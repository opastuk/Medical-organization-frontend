import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/HomePage.vue';
import scrollAnimation from '../../directives/scrollAnimation';

Vue.use(VueRouter);
Vue.use(Element);

Vue.directive('scroll', scrollAnimation);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
