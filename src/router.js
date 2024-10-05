// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import SobreNosPage from './components/pages/SobreNosPage.vue';
import ContatoPage from './components/pages/ContatoPage.vue';
import LoginPage from './components/pages/LoginPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/sobre-nos', component: SobreNosPage },
  { path: '/contato', component: ContatoPage },
  { path: '/login', component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
