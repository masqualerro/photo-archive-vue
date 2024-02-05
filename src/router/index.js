import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/MainView.vue'),
      children: [
        {
          path: 'collection/:locationId/:collectionId',
          name: 'collection',
          component: () => import('../components/CollectionDisplay.vue')
        },
        {
          path: 'locations',
          name: 'locations',
          component: () => import('../components/LocationsMenu.vue')
        },
        {
          path: 'collections',
          name: 'collections',
          component: () => import('../components/CollectionsMenu.vue')
        }
      ]
    }
  ]
})

export default router
