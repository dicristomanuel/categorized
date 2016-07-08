import pluralize from 'pluralize';

export default (words) => {
  debugger;
  words.forEach((word, idx, arr) => {
    const pluralized = pluralize(word);
    if (!!pluralized && !arr.includes(word)) arr.push(pluralized);
  });
  debugger;
  return words.join('|')
}
