import _ from 'lodash';
import pluralize from 'pluralize';

export default (sentence, regex) => {
  let finalContexts = [];
  sentence.match(regex).forEach((word) => {
    finalContexts.push(pluralize(word, 1));
  })
  return _.uniq(finalContexts);
};
