import pluralize from '../helpers/pluralize';

let words = [
  'awning',
  'back porch',
  'back stoop',
  'backyard',
  'basketball hoop',
  'bench',
  'birdbath',
  'bulbs',
  'bush',
  'carport',
  'compost bin',
  'doghouse',
  'downspout',
  'driveway',
  'edger',
  'fence',
  'flower',
  'flowerbed',
  'flower garden',
  'front porch',
  'front stoop',
  'fruit tree',
  'garage',
  'garbage can',
  'garden',
  'garden path',
  'gate',
  'grass',
  'gutter',
  'hammock',
  'hedges',
  'herb garden',
  'hoe',
  'hose',
  'hummingbird feeder',
  'land',
  'lawn',
  'lawnmower',
  'orchard',
  'path',
  'patio',
  'patio furniture',
  'planter',
  'plant pot',
  'pond',
  'pool',
  'porch',
  'porch swing',
  'rake',
  'rocks',
  'shed',
  'shovel',
  'shrub',
  'sod',
  'soil',
  'sprinkler',
  'stepping stone',
  'stoop',
  'swimming pool',
  'swing',
  'terrace',
  'trampoline',
  'trash can',
  'tree',
  'vegetable garden',
  'vine',
  'wading pool',
  'walkway',
  'weeds',
  'welcome mat',
  'yard'
];

export default (data) => {
  return pluralize(words);
}
