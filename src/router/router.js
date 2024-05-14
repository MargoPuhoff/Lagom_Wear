import Main from '@/pages/Main.vue'
import CatalogPage from '@/pages/CatalogPage.vue'
import CardIdPage from '@/pages/CardIdPage.vue'
import Favourites from '@/components/Favourites.vue'
import DeliveryPage from '@/pages/DeliveryPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
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
  },
  
  {
    path: '/delivery',
    component: DeliveryPage
  },
  
  {
    path: '/contact',
    component: ContactPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;