import pluralize from '../helpers/pluralize';

let words = [
  'admiral butterfly',
  'ambush bug',
  'ant',
  'aphid',
  'armyworm',
  'assassin bug',
  'atlas moth',
  'backswimmer',
  'bedbug',
  'bee',
  'beetle',
  'blue morpho butterfly',
  'bluet',
  'borer',
  'brown butterfly',
  'buckeye butterfly',
  'bug',
  'bumblebee',
  'butterfly',
  'carpenter ant',
  'caterpillar',
  'chrysalis',
  'cicada',
  'cockroach',
  'comma butterfly',
  'copper butterfly',
  'crane fly',
  'cricket',
  'cutworm',
  'damselfly',
  'darkling beetle',
  'dragonfly',
  'dung beetle',
  'earwig',
  'egg',
  'fire ant',
  'firefly',
  'flea',
  'fly',
  'fritillary butterfly',
  'fruitfly',
  'gnat',
  'gossamer winged butterfly',
  'grasshopper',
  'green darner dragonfly',
  'ground beetle',
  'grub',
  'gypsy moth',
  'hairstreak butterfly',
  'harlequin bug',
  'horse fly',
  'honeybee',
  'hornet',
  'house fly',
  'hover fly',
  'imago',
  'insect',
  'Japanese beetle',
  'Julia butterfly',
  'jumping bean',
  'junebug',
  'katydid',
  'kissing bug',
  'ladybug',
  'lacewing',
  'larva',
  'leafcutter ant',
  'leafhopper',
  'lice',
  'lightning bug',
  'locust',
  'longhorn beetle',
  'louse',
  'luna moth',
  'maggot',
  'mantid',
  'mantis',
  'mayfly',
  'meadowhawk',
  'mealworm',
  'metalmark butterfly',
  'metamorphosis',
  'midge',
  'milkweed bug',
  'monarch',
  'morpho',
  'mosquito',
  'moth',
  'nymph',
  'Oregon silverspot butterfly',
  'owl butterfly',
  'painted lady butterfly',
  'paper wasp',
  'planthopper',
  'pond skater',
  'praying mantid',
  'praying mantis',
  'pupa',
  'Queen Alexandra\'s birdwing butterfly',
  'roach',
  'robber fly',
  'scarab',
  'silkworm',
  'silverfish',
  'skipper',
  'snout butterfly',
  'spittlebug',
  'springtail',
  'stag beetle',
  'stink bug',
  'stonefly',
  'sulphur butterfly',
  'swallowtail butterfly',
  'termite',
  'thrip',
  'tiger beetle',
  'tiger moth',
  'tsetse fly',
  'Ulysses butterfly',
  'viceroy butterfly',
  'walkingstick',
  'wasp',
  'water boatman',
  'waterbug',
  'waterstrider',
  'weevil',
  'wood borer',
  'wood nymph butterfly',
  'woolly bear caterpillar',
  'yellowjacket',
  'yellow white butterfly',
  'zebra longwing butterfly',
  'zebra swallowtail butterfly'
];

export default (data) => {
  return pluralize(words);
}
