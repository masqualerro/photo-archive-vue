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
        length: 8,
        description: 'Photos a date at the university greenhouse at dusk.',
        cameras: ['Pentax K1000, Olympus MJU II']
      },
      {
        id: 2,
        name: 'Mendocino',
        folder: 'mendo',
        length: 8,
        description: 'Photos from a family trip to Mendocino, California.',
        cameras: ['Pentax K1000, Olympus MJU II']
      },
      {
        id: 3,
        name: 'Warehouse',
        folder: 'warehouse',
        length: 9,
        description: 'Building a record crate with my sister and my father.',
        cameras: ['Pentax K1000, Olympus MJU II']
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
        length: 7,
        description: 'Photos from walks in London proper.',
        cameras: ['Canon A1, Olympus MJU II']
      },
      {
        id: 2,
        name: 'Canal',
        folder: 'canal',
        length: 5,
        description: 'Photos from a walk along the Thames River in London.',
        cameras: ['Canon A1']
      },
      {
        id: 3,
        name: 'Kew Gardens',
        folder: 'kewgardens',
        length: 13,
        description: 'Photos from Kew Gardens in London.',
        cameras: ['Canon A1, Olympus MJU II']
      },
      {
        id: 4,
        name: 'Interiors',
        folder: 'interiors',
        length: 8,
        description: 'Photos from interiors in London.',
        cameras: ['Canon A1, Olympus MJU II']
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
        length: 7,
        description: 'Summer excursions in Rome, Italy.',
        cameras: ['Canon A1']
      },
      {
        id: 2,
        name: 'Pompeii',
        folder: 'pompeii',
        length: 5,
        description: 'A collection of photos from Pompeii, Italy.',
        cameras: ['Canon A1']
      },
      {
        id: 3,
        name: 'Florence',
        folder: 'florence',
        length: 5,
        description: 'A collection of photos from Florence, Italy - around the Uffizi Gallery.',
        cameras: ['Canon A1']
      },
      {
        id: 4,
        name: 'Ruins',
        folder: 'ruins',
        length: 5,
        description: 'A collection of photos from various ruins in Italy.',
        cameras: ['Canon A1']
      },
      {
        id: 5,
        name: 'Vatican City',
        folder: 'vaticancity',
        length: 5,
        description: 'Vatican city interiors and exteriors.',
        cameras: ['Canon A1']
      },
      {
        id: 6,
        name: 'Sorrento',
        folder: 'sorrento',
        length: 11,
        description: 'A collection of photos from my weekend trip to Sorrento, Italy.',
        cameras: ['Canon A1']
      },
      {
        id: 7,
        name: 'Positano',
        folder: 'positano',
        length: 7,
        description: 'A half hour in Positano, Italy, before the last ferry left.',
        cameras: ['Canon A1']
      },
      {
        id: 8,
        name: 'Excursions',
        folder: 'excursions',
        length: 7,
        description: 'A collection of photos from various excursions in Italy.',
        cameras: ['Canon A1']
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
        length: 7,
        description: 'The start of my Portugal trip, in Lisbon.',
        cameras: ['Canon A1']
      },
      {
        id: 2,
        name: 'Porto',
        folder: 'porto',
        length: 6,
        description: 'Solitary excursions through Porto, Portugal.',
        cameras: ['Canon A1']
      },
      {
        id: 3,
        name: 'Obidos',
        folder: 'obidos',
        length: 6,
        description: 'Walks along the castle walls in Obidos, Portugal.',
        cameras: ['Canon A1']
      },
      {
        id: 4,
        name: 'Coimbra',
        folder: 'coimbra',
        length: 5,
        description: 'A collection of photos from Coimbra, Portugal and surrounding areas.',
        cameras: ['Canon A1']
      },
      {
        id: 5,
        name: 'Bom Jesus',
        folder: 'bomjesus',
        length: 4,
        description: 'A collection of photos from Bom Jesus, Portugal.',
        cameras: ['Canon A1']
      }
    ],
    icon: GlobeEuropeAfricaIcon
  }
]

export default locations
