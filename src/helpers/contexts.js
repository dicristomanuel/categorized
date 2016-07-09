import _ from 'lodash';
import categories from '../categories';

export default (sentence) => {
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

  return {contexts, matched: _.uniq(_.flattenDeep(matched))};
};
