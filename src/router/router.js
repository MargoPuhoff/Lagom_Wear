import Main from '@/pages/Main.vue'
import CatalogPage from '@/pages/CatalogPage.vue'
import CardIdPage from '@/pages/CardIdPage.vue'
import Favourites from '@/components/Favourites.vue'
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main
  },

  {
    path: '/catalog',
    component: CatalogPage
  },
  
  {
    path: '/catalog/:id',
    component: CardIdPage
  },
  
  {
    path: '/favorite',
    component: Favourites
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;