import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Connect from './components/Connect.vue'
import Support from './components/Support.vue'
import Login from './components/Login.vue'


const routes = [
  { path: '/',        component: Home },
  { path: '/about',   component: About },
  { path: '/connect', component: Connect },
  { path: '/support', component: Support },
  { path: '/login',   component: Login },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
