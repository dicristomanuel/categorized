import pluralize from '../helpers/pluralize';

let words = [
  'Dutch oven',
  'French fry',
  'aerate',
  'age',
  'apron',
  'bake',
  'baking pan',
  'baking sheet',
  'barbecue',
  'barbecue grill',
  'baste',
  'baster',
  'basting brush',
  'batter',
  'beat',
  'bind',
  'blacken',
  'blanche',
  'blend',
  'blender',
  'boil',
  'bone',
  'braise',
  'bread',
  'bread basket',
  'bread knife',
  'brew',
  'broil',
  'brown',
  'brush',
  'bundt pan',
  'burn',
  'butcher block',
  'butterfly',
  'cake pan',
  'can',
  'can opener',
  'carafe',
  'caramelize',
  'casserole pan',
  'char',
  'char broil',
  'charcoal grill',
  'cheese cloth',
  'chill',
  'chop',
  'chunk',
  'churn',
  'clarify',
  'coddle',
  'coffee maker',
  'coffee pot',
  'colander',
  'combine',
  'congeal',
  'convection oven',
  'cookbook',
  'cookie cutter',
  'cookie press',
  'cookie sheet',
  'cool',
  'cooling rack',
  'core',
  'corer',
  'cream',
  'crepe pan',
  'crock',
  'crock pot',
  'cupcake pan',
  'cured',
  'custard cup',
  'cut',
  'cutlery',
  'cutting board',
  'debone',
  'decorate',
  'deep fry',
  'deglaze',
  'descale',
  'devil',
  'dice',
  'dip',
  'dough',
  'drain',
  'drizzle',
  'dry',
  'egg beater',
  'egg poacher',
  'egg timer',
  'escallop',
  'espresso machine',
  'ferment',
  'fillet',
  'filter',
  'flambe',
  'flavor',
  'flip',
  'fold',
  'fondue pot',
  'food processor',
  'fork',
  'freeze',
  'fricassee',
  'frost',
  'froth',
  'fry',
  'frying pan',
  'garlic press',
  'garnish',
  'gel',
  'gelatine mold',
  'glaze',
  'grate',
  'grater',
  'gratin',
  'grease',
  'griddle',
  'grill',
  'grill pan',
  'grind',
  'grinder',
  'hamburger press',
  'hand mixer',
  'hard boil',
  'harden',
  'hash',
  'heat',
  'honey pot',
  'hull',
  'ice',
  'ice bucket',
  'ice cream scoop',
  'icing spatula',
  'infuse',
  'infuser',
  'jar opener',
  'jell',
  'jellyroll pan',
  'juice',
  'juicer',
  'julienne',
  'kettle',
  'knead',
  'knife',
  'ladle',
  'lasagne pan',
  'layer',
  'leaven',
  'lid',
  'macerate',
  'mandolin',
  'marinate',
  'mash',
  'measure',
  'measuring cup',
  'measuring spoon',
  'melt',
  'microwave',
  'microwave oven',
  'mix',
  'mixing bowl',
  'mold',
  'mortar and pestle',
  'muffin pan',
  'nut cracker',
  'oil',
  'oven',
  'oven fry',
  'oven mitts',
  'overcook',
  'pan',
  'pan fry',
  'parboil',
  'parchment paper',
  'pare',
  'paring knife',
  'pastry bag',
  'peel',
  'peeler',
  'pepper mill',
  'percolate',
  'percolator',
  'pickle',
  'pie pan',
  'pit',
  'pitcher',
  'pizza cutter',
  'pizza stone',
  'platter',
  'poach',
  'poacher',
  'pop',
  'popcorn popper',
  'pot',
  'pot holder',
  'poultry shears',
  'pour',
  'precook',
  'prepare',
  'preserve',
  'press',
  'pressure cook',
  'pressure cooker',
  'process',
  'pulp',
  'puree',
  'quarter',
  'quiche pan',
  'raclette grill',
  'ramekin',
  'raw',
  'reduce',
  'refrigerate',
  'refrigerator',
  'render',
  'rice cooker',
  'ricer',
  'rise',
  'roast',
  'roaster',
  'roasting pan',
  'roll',
  'rolling pin',
  'rub',
  'salad bowl',
  'salad spinner',
  'salt',
  'salt shaker',
  'sauce pan',
  'saute',
  'scald',
  'scallop',
  'schirr',
  'scissors',
  'scoop',
  'score',
  'scramble',
  'sear',
  'season',
  'separate',
  'serve',
  'sharpening steel',
  'shears',
  'shell',
  'shred',
  'shuck',
  'sieve',
  'sift',
  'simmer',
  'skewer',
  'skillet',
  'skim',
  'skin',
  'slice',
  'slicer',
  'sliver',
  'slow cook',
  'slow cooker',
  'smoke',
  'snip',
  'soak',
  'soft boil',
  'souffle dish',
  'souse',
  'spice rack',
  'spoon',
  'sprinkle',
  'steak knife',
  'steam',
  'steamer',
  'steep',
  'stew',
  'stir',
  'stir fry',
  'stockpot',
  'stove',
  'strain',
  'strainer',
  'stuff',
  'sweat',
  'sweeten',
  'tablespoon',
  'tart pan',
  'tea infuser',
  'teakettle',
  'teaspoon',
  'temper',
  'tenderize',
  'thermometer',
  'thicken',
  'thin',
  'toast',
  'toaster',
  'toaster oven',
  'tongs',
  'top',
  'toss',
  'trim',
  'trivet',
  'truss',
  'turn',
  'uncured',
  'unmold',
  'utensils',
  'vegetable bin',
  'vegetable peeler',
  'waffle iron',
  'warm',
  'wash',
  'water filter',
  'wedge',
  'whip',
  'whisk',
  'whisk',
  'wok',
  'yogurt maker',
  'zap',
  'zest',
  'zester'
]

export default (data) => {
  return pluralize(words);
}