import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import locations from '@/data/LocationData'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
        metaTags: [
          {
            name: 'description',
            content:
              'Miguel Sedillo film photography archive. Shot with Canon A1, Olympus Mju II, and Pentax K1000.'
          },
          {
            name: 'keywords',
            content:
              'film, photography, archive, travel photography, Canon A1, Olympus Mju II, Pentax K1000, Miguel Sedillo, Miguel Sedillo film photography archive, Miguel Sedillo film photography, Miguel Sedillo film, Miguel Sedillo photography, Miguel Sedillo archive, Miguel Sedillo Canon A1, Miguel Sedillo Olympus Mju II, Miguel Sedillo Pentax K1000, Miguel Sedillo film photography archive Canon A1, Miguel Sedillo film photography archive Olympus Mju II, Miguel Sedillo film photography archive Pentax K1000, Miguel Sedillo film photography Canon A1, Miguel Sedillo film photography Olympus Mju II, Miguel Sedillo film photography Pentax K1000, Miguel Sedillo film Canon A1, Miguel Sedillo film Olympus Mju II, Miguel Sedillo film Pentax K1000, Miguel Sedillo photography Canon A1, Miguel Sedillo photography Olympus Mju II, Miguel Sedillo photography Pentax K1000, Miguel Sedillo archive Canon A1, Miguel Sedillo archive Olympus Mju II, Miguel Sedillo archive Pentax K1000'
          }
        ]
      }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/MainView.vue'),
      children: [
        {
          path: 'collection/:locationId/:collectionId',
          name: 'collection',
          component: () => import('../components/CollectionDisplay.vue'),
          beforeEnter: (to, from, next) => {
            const locationId = to.params.locationId
            const collectionId = to.params.collectionId
            const location = locations.find((loc) => loc.id === parseInt(locationId))
            const collection = location.children.find((col) => col.id === parseInt(collectionId))
            if (collection) {
              next()
            } else {
              next({ name: 'collections' })
            }
          }
        },
        // {
        //   path: 'locations',
        //   name: 'locations',
        //   component: () => import('../components/LocationsMenu.vue')
        // },
        {
          path: 'collections',
          name: 'collections',
          component: () => import('../components/CollectionsMenu.vue'),
          meta: {
            title: 'Collections',
            metaTags: [
              {
                name: 'description',
                content:
                  'A menu of collections of film photography by Miguel Sedillo. Shot with Canon A1, Olympus Mju II, and Pentax K1000.'
              },
              {
                name: 'keywords',
                content:
                  'film, photography, archive, travel photography, Canon A1, Olympus Mju II, Pentax K1000, Miguel Sedillo, Miguel Sedillo film photography archive, Miguel Sedillo film photography, Miguel Sedillo film, Miguel Sedillo photography, Miguel Sedillo archive, Miguel Sedillo Canon A1, Miguel Sedillo Olympus Mju II, Miguel Sedillo Pentax K1000, Miguel Sedillo film photography archive Canon A1, Miguel Sedillo film photography archive Olympus Mju II, Miguel Sedillo film photography archive Pentax K1000, Miguel Sedillo film photography Canon A1, Miguel Sedillo film photography Olympus Mju II, Miguel Sedillo film photography Pentax K1000, Miguel Sedillo film Canon A1, Miguel Sedillo film Olympus Mju II, Miguel Sedillo film Pentax K1000, Miguel Sedillo photography Canon A1, Miguel Sedillo photography Olympus Mju II, Miguel Sedillo photography Pentax K1000, Miguel Sedillo archive Canon A1, Miguel Sedillo archive Olympus Mju II, Miguel Sedillo archive Pentax K1000'
              }
            ]
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) =>
    el.parentNode.removeChild(el)
  )

  if (!nearestWithTitle) return next()

  nearestWithTitle.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement('meta')
      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key])
      })
      tag.setAttribute('data-vue-router-controlled', '')
      return tag
    })
    .forEach((tag) => document.head.appendChild(tag))

  next()
})

export default router
