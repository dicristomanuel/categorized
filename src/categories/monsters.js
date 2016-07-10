import pluralize from '../helpers/pluralize';

let words = [
  'abominable snowman',
  'angel',
  'banshee',
  'basilisk',
  'beast',
  'behemoth',
  'bogey man',
  'brute',
  'centaur',
  'Cerberus (three headed dog)',
  'changeling',
  'cherub',
  'chimera (Lion goat snake hybrid)',
  'colossus',
  'crone',
  'cyclops',
  'demon',
  'devil',
  'djinn',
  'dragon',
  'dryad (tree nymph)',
  'elf',
  'fairy',
  'fiend',
  'fire breathing dragon',
  'Frankenstein\'s monster',
  'freak',
  'gargoyle',
  'genii',
  'ghost',
  'ghoul',
  'giant',
  'gnome',
  'Godzilla',
  'golum',
  'gorgon',
  'hag',
  'harpy',
  'horror',
  'hydra',
  'imp',
  'jinn',
  'kelpie',
  'lake spirit',
  'leprechaun',
  'leviathan',
  'little people',
  'Loch Ness monster',
  'medusa',
  'merman',
  'mermaid',
  'monster',
  'mummy',
  'Nessie',
  'nymph',
  'ogre',
  'orc',
  'Pegasus',
  'phoenix',
  'polyphemus',
  'rain bird (Native American)',
  'raven spirit (Native American)',
  'ryu (Japanese dragon)',
  'savage',
  'sea monster',
  'shapeshifter',
  'siren',
  'spirit',
  'sprite',
  'swamp monster',
  'titan',
  'tree nymph (dryad)',
  'troll',
  'undead',
  'unicorn',
  'vampire',
  'werewolf',
  'witch',
  'wretch',
  'yeti',
  'zombie'
];

export default (data) => {
  return pluralize(words);
}
