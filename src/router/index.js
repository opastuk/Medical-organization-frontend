import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Props from '../views/PropsPage.vue';
import Terms from '../views/TermsPage.vue';
import Presentations from '../views/PresentationPage.vue';
import Memo from '../views/MemoPage.vue';
import Career from '../views/CareerPage.vue';
import Contacts from '../views/ContactsPage.vue';
import Clients from '../views/ClientsPage.vue';
import NewPage from '../views/NewPage.vue';
import Catalog from '../views/CatalogPage.vue';
import Contact from '../views/ContactPage.vue';
import Home from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';
import News from '../views/NewsPage.vue';
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
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog,
  },
  {
    path: '/terms',
    name: 'terms',
    component: Terms,
  },
  {
    path: '/presentations',
    name: 'presentations',
    component: Presentations,
  },
  {
    path: '/memo',
    name: 'memo',
    component: Memo,
  },
  {
    path: '/career',
    name: 'career',
    component: Career,
  },
  {
    path: '/news',
    name: 'news',
    component: News,
  },
  {
    path: '/clients',
    name: 'clients',
    component: Clients,
  },
  {
    path: '/news/:id',
    name: 'new',
    component: NewPage,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
  },
  {
    path: '/contacts/:id',
    name: 'contact',
    component: Contact,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
