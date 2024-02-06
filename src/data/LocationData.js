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
        folder: 'greenhouse',
        length: 8
      },
      {
        id: 2,
        name: 'Mendocino',
        folder: 'mendo',
        length: 8
      },
      {
        id: 3,
        name: 'Warehouse',
        folder: 'warehouse',
        length: 9
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
        folder: 'london',
        length: 7
      },
      {
        id: 2,
        name: 'Canal',
        folder: 'canal',
        length: 5
      },
      {
        id: 3,
        name: 'Kew Gardens',
        folder: 'kewgardens',
        length: 13
      },
      {
        id: 4,
        name: 'Interiors',
        folder: 'interiors',
        length: 8
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
        folder: 'roma',
        length: 7
      },
      {
        id: 2,
        name: 'Pompeii',
        folder: 'pompeii',
        length: 5
      },
      {
        id: 3,
        name: 'Florence',
        folder: 'florence',
        length: 5
      },
      {
        id: 4,
        name: 'Ruins',
        folder: 'ruins',
        length: 5
      },
      {
        id: 5,
        name: 'Vatican City',
        folder: 'vaticancity',
        length: 5
      },
      {
        id: 6,
        name: 'Sorrento',
        folder: 'sorrento',
        length: 11
      },
      {
        id: 7,
        name: 'Positano',
        folder: 'positano',
        length: 7
      },
      {
        id: 8,
        name: 'Excursions',
        folder: 'excursions',
        length: 7
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
        folder: 'lisboa',
        length: 7
      },
      {
        id: 2,
        name: 'Porto',
        folder: 'porto',
        length: 6
      },
      {
        id: 3,
        name: 'Obidos',
        folder: 'obidos',
        length: 6
      },
      {
        id: 4,
        name: 'Coimbra',
        folder: 'coimbra',
        length: 5
      },
      {
        id: 5,
        name: 'Bom Jesus',
        folder: 'bomjesus',
        length: 4
      }
    ],
    icon: GlobeEuropeAfricaIcon
  }
]

export default locations
