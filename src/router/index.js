import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line no-unused-vars
import { Icon } from 'leaflet';
// eslint-disable-next-line no-unused-vars
import Home from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';
import scrollAnimation from '../../directives/scrollAnimation';
// eslint-disable-next-line import/extensions
import 'leaflet/dist/leaflet.css';
// eslint-disable-next-line no-unused-vars
import Map from '../components/Map.vue';
import Props from '../views/PropsPage.vue';

Vue.use(VueRouter);
Vue.use(Element);

Vue.directive('scroll', scrollAnimation);

// eslint-disable-next-line no-underscore-dangle
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  // eslint-disable-next-line global-require
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  // eslint-disable-next-line global-require
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  // eslint-disable-next-line global-require
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
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
  mode: 'history',
  routes,
});

export default router;
