import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';
import Props from '../views/PropsPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/props',
    name: 'props',
    component: Props,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
