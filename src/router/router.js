import Main from '@/pages/Main.vue'
import CatalogPage from '@/pages/CatalogPage.vue'
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main
  },

  {
    path: '/catalog',
    component: CatalogPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;