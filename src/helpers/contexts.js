import _ from 'lodash';
import categories from '../categories';
import { findInSentence } from 'smart-city-finder';

export default (sentence, options = {}) => {
  let contexts = [];
  let matched = [];

  for (let cat in categories) {
    const regex = new RegExp(`\\b(${categories[cat]()})\\b`, 'igm');
    let match = sentence.match(regex);
    if (match) {
      contexts.push(cat);
      matched.push(match);
    }
  }

  if (options.location && options.location === true) {
    const location = findInSentence(sentence, 1);
    return {
      contexts: [...contexts, 'location'],
      matched: _.uniq(_.flattenDeep([...matched, location[0].matched]))
    }
  }

  return { contexts, matched: _.uniq(_.flattenDeep(matched)) };
};
