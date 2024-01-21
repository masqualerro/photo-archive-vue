import { GlobeAmericasIcon, GlobeEuropeAfricaIcon } from '@heroicons/vue/24/solid'
const locations = [
  {
    id: 1,
    name: 'California',
    folder: 'us',
    children: [
      {
        id: 1,
        name: 'Greenhouse',
        route: '/greenhouse'
      },
      {
        id: 2,
        name: 'Mendocino',
        route: '/mendocino'
      },
      {
        id: 3,
        name: 'Warehouse',
        route: '/warehouse'
      }
    ],
    icon: GlobeAmericasIcon
  },
  {
    id: 2,
    name: 'UK',
    folder: 'uk',
    children: [
      {
        id: 1,
        name: 'London',
        route: '/london'
      },
      {
        id: 2,
        name: 'Canal',
        route: '/canal'
      },
      {
        id: 3,
        name: 'Kew Gardens',
        route: '/kew-gardens'
      },
      {
        id: 4,
        name: 'Interiors',
        route: '/interiors'
      }
    ],
    icon: GlobeEuropeAfricaIcon
  },
  {
    id: 3,
    name: 'Italy',
    folder: 'italy',
    children: [
      {
        id: 1,
        name: 'Roma',
        route: '/roma'
      },
      {
        id: 2,
        name: 'Pompeii',
        route: '/pompeii'
      },
      {
        id: 3,
        name: 'Florence',
        route: '/florence'
      },
      {
        id: 4,
        name: 'Ruins',
        route: '/ruins'
      },
      {
        id: 5,
        name: 'Vatican City',
        route: '/vatican-city'
      },
      {
        id: 6,
        name: 'Sorrento',
        route: '/sorrento'
      },
      {
        id: 7,
        name: 'Positano',
        route: '/positano'
      },
      {
        id: 8,
        name: 'Excursions',
        route: '/excursions'
      }
    ],
    icon: GlobeEuropeAfricaIcon
  },
  {
    id: 4,
    name: 'Portugal',
    folder: 'portugal',
    children: [
      {
        id: 1,
        name: 'Lisboa',
        route: '/lisboa'
      },
      {
        id: 2,
        name: 'Porto',
        route: '/porto'
      },
      {
        id: 3,
        name: 'Obidos',
        route: '/obidos'
      },
      {
        id: 4,
        name: 'Coimbra',
        route: '/coimbra'
      },
      {
        id: 5,
        name: 'Bom Jesus',
        route: '/bom-jesus'
      }
    ],
    icon: GlobeEuropeAfricaIcon
  }
]

export default locations
